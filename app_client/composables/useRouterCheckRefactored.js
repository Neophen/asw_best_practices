const getInt = (item) => parseInt(item, 10);

const getOrFetchProfile = async (store) => {
  if (store.getters["profile/getIsLoaded"]) {
    return {
      userProfile: store.getters["profile/getProfile"],
      organizations: store.getters["organisations/getOrganisations"],
    };
  }

  await store.dispatch("profile/FETCH_PROFILE", { removeOrgId: true });
  await store.dispatch("organisations/FETCH_ORGANISATIONS", {
    removeOrgId: true,
  });

  return {
    userProfile: store.getters["profile/getProfile"],
    organizations: store.getters["organisations/getOrganisations"],
  };
};

const getOrgId = (toQueryId, organizations) => {
  const queryId = getInt(toQueryId);
  const hasQueryId = Number.isInteger(queryId);
  const storedId = getInt(localStorage.getItem("orgId"));
  const hasStoredId = Number.isInteger(storedId);
  const fallbackId = organizations[0].id;
  let retry = false;

  if (!hasQueryId) {
    retry = true;
  }

  const orgId = hasQueryId ? queryId : hasStoredId ? storedId : fallbackId;

  localStorage.setItem("orgId", orgId);

  return {
    retry,
    orgId,
  };
};

const checkPermissionSet = async (profile, orgId, store) => {
  if (profile.internal) {
    return;
  }

  const currentProfileOrgId = getInt(profile.role.organization.organization_id);

  if (orgId === currentProfileOrgId) {
    return;
  }

  await store.dispatch("profile/FETCH_PROFILE");
};

const userHasPermission = (permission, permissions) => {
  return permissions.find((x) => x.name === permission);
};

export const useRouterCheck = async (to, next, store) => {
  const { requiresAuth, permission } = to.meta;

  if (!requiresAuth) {
    return next("proceed");
  }

  if (!store.getters["auth/isAuthenticated"]) {
    return next("/login");
  }

  if (permission === null) {
    await store.dispatch("profile/FETCH_PROFILE");
    return next("proceed");
  }

  const { userProfile, organizations } = await getOrFetchProfile(store);
  const { retry, orgId } = getOrgId(to.query.orgId, organizations);

  if (retry) {
    return next(`retry with: ${orgId}`);
  }

  await checkPermissionSet(userProfile, orgId);

  return userHasPermission(permission, userProfile.role.permissions)
    ? next("proceed")
    : next("/home");
};
