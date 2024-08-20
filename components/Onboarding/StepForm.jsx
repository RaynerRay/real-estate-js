"use client";
import React from "react";
import { useSelector } from "react-redux";
import BasicInformationForm from "./StepForms/BasicInformationForm";
import AdditionalInformationForm from "./StepForms/AdditionalInformationForm";
import Summary from "./StepForms/Summary";
import AgentDetailsForm from "./StepForms/AgentDetailsForm";

export default function StepForm({agentId}) {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  function renderFormByStep(step) {
    if (step === 1) {
      return <BasicInformationForm />;
    } else if (step === 2) {
      return <AgentDetailsForm />;
    } else if (step === 3) {
      return <AdditionalInformationForm />;
    } else if (step === 4) {
      return <Summary agentId={agentId} />;
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>;
}
