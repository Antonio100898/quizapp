import { useState } from "react";
import StepWizard from "react-step-wizard";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const AppStepWizard = () => {
    const [instance, setInstance] = useState<any>(null)

    const handleInstance = (value: any) => {
        setInstance(value)
    }
    return (
        <StepWizard instance={handleInstance}>
            <Step1 />
            <Step2 />
            <Step3 />
            <Step4 />
        </StepWizard>
    );
}
export default AppStepWizard