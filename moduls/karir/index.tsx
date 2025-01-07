import { Container, Title, DocumentLink, Button } from "components";
import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { formatImage } from "utils/formatter";

const jobDescription = [
  {
    label:
      "Lead business by quarterly and annually in revenue, marketing program, channel development, pricing strategy and competition",
  },
  {
    label:
      "Achieve sales target in quarterly and annually in all assigned territories for the solutions, products and service",
  },
  {
    label:
      "Manage the pipeline and competitive activity by analyzing, monitoring, and developing strategy to win and minimize the negative trends",
  },
  {
    label:
      "Responsible for country business in revenue, growth, P&L, market share, channel partner and customer",
  },
  {
    label:
      "Work with relevant function in regional team to recruit, identify and enablement for new partner and manage the existing partner",
  },
  {
    label:
      "Engage in sales activities for sales call, training, pipeline review, weekly and monthly report, account engagement, farming and hunting new opportunities",
  },
  { label: "Plan and organize events in conjunction with channel partner" },
  { label: "Develop and execute sales campaigns and marketing campaigns" },
];

const requirements = [
  {
    label:
      "Bachelor Degree in Economy/Management/IT/Computer Science/Electronic or related major",
  },
  {
    label:
      "Has minimum 3 years related working experience in Account Manager or related fields.",
  },
  { label: "Experience in IT/IoT company is a plus" },
  {
    label:
      "Having professional knowledge for Enterprises business process and IT/IoT Technology.",
  },
  { label: "Accustomed to providing business forecast report" },
  {
    label:
      "Possess good relation or networking with many companies in Indonesia.",
  },
  { label: "Good communication and negotiation skills." },
  { label: "Charming attitude and excellent grooming skill." },
  { label: "Experience in achieving sales target in the previous company." },
  { label: "Fluent in English" },
];

const karir = [
  {
    label: "Finance Manager",
    child: [
      {
        label: (
          <div className="text-sm sm:text-base">
            <div className="font-semibold">Job Description</div>
            <div className="pl-5 mt-3">
              <ul className="list-disc">
                {jobDescription.map((item, key) => (
                  <li key={key}>{item.label}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 font-semibold">Requirements</div>
            <div className="pl-5 mt-3">
              <ul className="list-disc">
                {requirements.map((item, key) => (
                  <li key={key}>{item.label}</li>
                ))}
              </ul>
            </div>

            <Button
              label="Apply Now"
              style={{ marginTop: 30, minWidth: 150 }}
            />
          </div>
        ),
      },
    ],
  },
  {
    label: "Account Manager",
    child: [
      {
        label: (
          <div className="text-sm sm:text-base">
            <div className="font-semibold">Job Description</div>
            <div className="pl-5 mt-3">
              <ul className="list-disc">
                {jobDescription.map((item, key) => (
                  <li key={key}>{item.label}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 font-semibold">Requirements</div>
            <div className="pl-5 mt-3">
              <ul className="list-disc">
                {requirements.map((item, key) => (
                  <li key={key}>{item.label}</li>
                ))}
              </ul>
            </div>

            <Button
              label="Apply Now"
              style={{ marginTop: 30, minWidth: 150 }}
            />
          </div>
        ),
      },
    ],
  },
];

interface Props {
  lang?: any;
  data?: any;
}

function index(props: Props) {
  const { lang, data } = props;
  const sign = lang === "en" ? "_eng" : "_ind";

  const hero = data?.hero;
  const content = data?.jobComponent?.content;

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        <div>
          <Title label={hero["title" + sign]} />
        </div>
        <div className="mt-5 sm:mt-0 col-span-1 sm:col-span-3">
          {content.map((item: any, key: any) => {
            const child = [
              {
                label: (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item["description_job" + sign],
                    }}
                  />
                ),
              },
            ];

            return (
              <DocumentLink
                key={key}
                icon={<img src={formatImage(item.icon)} alt={"career" + key} />}
                label={item["title_job" + sign]}
                child={child}
                isBorder
                isCollapse
                // icon={<BriefcaseIcon className="w-7 text-warning3" />}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default index;
