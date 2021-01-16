export const useRouterCheck = async (to, next, store) => {
  // does this route need authentication?
  if (to.meta.requiresAuth) {
    // if yes we need to check if the user is authenticated
    // else we send him to the login page
    if (store.getters["auth/isAuthenticated"]) {
      // check if the route requires a role
      if (to.meta.permission) {
        if (!store.getters["profile/getIsLoaded"]) {
          await store.dispatch("profile/FETCH_PROFILE", { removeOrgId: true });
          await store.dispatch("organisations/FETCH_ORGANISATIONS", {
            removeOrgId: true,
          });
        }

        const userProfile = store.getters["profile/getProfile"];
        const organizations = store.getters["organisations/getOrganisations"];
        const localStorageOrgId = parseInt(localStorage.getItem("orgId"), 10);
        const toQueryOrgId = parseInt(to.query.orgId, 10);
        if (!Number.isInteger(toQueryOrgId)) {
          const orgIndex = organizations.findIndex(
            (org) => parseInt(org.id, 10) === localStorageOrgId
          );
          if (Number.isInteger(localStorageOrgId) && orgIndex >= 0) {
            localStorage.setItem("orgId", localStorageOrgId);
            next(`retry with ${localStorageOrgId}`);
          } else {
            localStorage.setItem("orgId", organizations[0].id);
            next(`retry with ${organizations[0].id}`);
          }
        } else {
          const orgIndex = organizations.findIndex(
            (org) => parseInt(org.id, 10) === toQueryOrgId
          );
          if (orgIndex < 0) {
            localStorage.setItem("orgId", organizations[0].id);
            next(`retry with ${organizations[0].id}`);
          } else {
            localStorage.setItem("orgId", toQueryOrgId);
          }
        }
        // check if we have the right permission set loaded
        if (!userProfile.internal) {
          const currentProfileOrgId = parseInt(
            userProfile.role.organization.organization_id,
            10
          );
          const needsProfileUpdate = localStorageOrgId !== currentProfileOrgId;
          if (needsProfileUpdate) {
            await store.dispatch("profile/FETCH_PROFILE");
          }
        }
        if (to.meta.permission !== null) {
          const foundPermission = userProfile.role.permissions.find(
            (permissionFromRoles) =>
              permissionFromRoles.name === to.meta.permission
          );
          if (foundPermission && foundPermission.name === to.meta.permission) {
            next("proceed");
          } else {
            next("/home");
          }
        } else {
          next("proceed");
        }
      } else {
        await store.dispatch("profile/FETCH_PROFILE");
        next("proceed");
      }
      // redirect to the login page
      // is the user is not authenticated
    } else {
      next("/login");
    }
  } else {
    next("proceed");
  }
};
