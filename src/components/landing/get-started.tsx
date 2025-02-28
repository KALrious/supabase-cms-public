import SectionContainer from "@/atoms/section-container";
import TimelineItem from "@/molecules/timeline-item";
import { Heading } from "@atoms/text";

const Timeline = [
  {
    stepNumber: "01",
    stepTitle: "Create an account",
    stepContent: "Sign up for an account on our platform to get started.",
  },
  {
    stepNumber: "02",
    stepTitle: "You will receive access to the repository",
    stepContent: "Create a new project and configure it to your needs.",
  },
  {
    stepNumber: "03",
    stepTitle: "Create your Supabase Application",
    stepContent: "Start building your application and deploy it.",
  },
  {
    stepNumber: "04",
    stepTitle: "Manage your content with ease",
    stepContent: "Start building your application and deploy it.",
  },
];

const GetStarted = () => {
  return (
    <SectionContainer>
      <Heading className="mb-20">How to get started ?</Heading>
      <div className="">
        {Timeline.map((item, index) => (
          <TimelineItem
            key={item.stepNumber}
            stepNumber={item.stepNumber}
            stepTitle={item.stepTitle}
            stepContent={item.stepContent}
            isLastItem={index === Timeline.length - 1}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
export default GetStarted;
