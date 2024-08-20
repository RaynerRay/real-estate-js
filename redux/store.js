// Create the Store

import { configureStore } from "@reduxjs/toolkit";
import onboardingSlice from "./slices/onboardingSlice";

export const store = configureStore({
  reducer: {
    // Slices go here
    onboarding: onboardingSlice,
  },
});
