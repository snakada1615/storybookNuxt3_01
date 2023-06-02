import heloMachineVue from "../components/heloMachine.vue";

export default {
  title: 'Example/heloMachine',
  component: heloMachineVue,
  render: (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: {
      heloMachineVue,
    },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
      // Story args can be spread into the returned object
      return {
        ...args,
      };
    },
    // Then, the spread values can be accessed directly in the template
    template: '<helo-machineVue :message="message" />',
  }),
};

export const LoggedIn = {
  args: {
    message: 'fighting'
  },
};

export const LoggedOut = {
  args: {
    message: 'go away'
  },
};
