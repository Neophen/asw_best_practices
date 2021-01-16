export const useStore = (isAuthenticated = true) => ({
  getters: {
    "auth/isAuthenticated": isAuthenticated,
    "profile/getIsLoaded": true,
    "organisations/getOrganisations": [
      {
        id: "1",
      },
      {
        id: "2",
      },
    ],
    "profile/getProfile": {
      internal: false,

      role: {
        organization: {
          organization_id: 1,
        },
        permissions: [
          {
            name: "can_do_x",
          },
          {
            name: "can_do_y",
          },
        ],
      },
    },
  },
  actions: {
    "profile/FETCH_PROFILE": (payload) => {},
    "organisations/FETCH_ORGANISATIONS": (payload) => {},
  },
  dispatch: (action, payload) => {
    return this.actions[action](payload);
  },
});
