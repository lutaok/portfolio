import { Component, Index, JSX, children, createSignal } from "solid-js";
import "./timeline.scss";

export interface TimelineStepProps {
  id: string;
  title: string;
  children: JSX.Element;
}

interface TimelineProps {
  id: string;
  children: JSX.Element;
}

interface Step {
  id: string;
  index: number;
}

const Timeline: Component<TimelineProps> = (props) => {
  const steps = children(() => props.children);
  const stepsProperties = () => steps.toArray() as unknown as TimelineStepProps[];

  const defaultStep: Step = {
    id: stepsProperties()[0].id,
    index: 0,
  };

  const [currentStep, setCurrentStep] = createSignal<Step>(defaultStep);

  const activeStep = () => stepsProperties().find((step) => step.id === currentStep().id);

  const buttonPrevDisabled = () => currentStep().index === 0;

  const buttonNextDisabled = () => currentStep().index === stepsProperties().length - 1;

  const handleChangeStepByIndex = (nextIndex: number) => {
    setCurrentStep(() => {
      const newStep = stepsProperties().find((_, index) => index === nextIndex);

      if (newStep) {
        return {
          id: newStep.id,
          index: nextIndex,
        };
      }

      return defaultStep;
    });
  };

  return (
    <div class="timeline">
      <div class="timeline-container">
        <button
          disabled={buttonPrevDisabled()}
          onClick={() => {
            const newIndex = currentStep().index - 1;
            handleChangeStepByIndex(newIndex);
          }}
        >
          Arrow UP
        </button>

        <div class="timeline-steps">
          <Index each={stepsProperties()}>
            {(step, index) => (
              <button
                class="timeline-step"
                onClick={() =>
                  setCurrentStep(() => ({
                    id: step().id,
                    index: index,
                  }))
                }
              >
                {step().title}
              </button>
            )}
          </Index>
        </div>

        <button
          disabled={buttonNextDisabled()}
          onClick={() => {
            const newIndex = currentStep().index + 1;
            handleChangeStepByIndex(newIndex);
          }}
        >
          Arrow down
        </button>
      </div>
      <div>{activeStep()?.children}</div>
    </div>
  );
};

export default Timeline;
