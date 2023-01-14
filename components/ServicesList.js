import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function ServicesList({ services }) {
  console.log(services);
  //   const [selected, setSelected] = useState(services[0]);

  return (
    <div className="w-full px-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {services &&
              services.map((service) => (
                <RadioGroup.Option
                  key={service.title}
                  value={service}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2"
                        : ""
                    }
                  ${
                    checked
                      ? "bg-white-900 bg-opacity-75 text-black"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label as="p">
                              {service.title}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="span">
                              {/* <span>
                              {service.price}/{service.cpus}
                            </span> */}
                              {/* <span aria-hidden="true">&middot;</span> */}
                              {/* <span>{service.title}</span> */}
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {
                          <div className="shrink-0 text-black">
                            <span>{service.price}</span>
                            {/* <CheckIcon className="h-6 w-6" /> */}
                          </div>
                        }
                      </div>
                    </>
                  }
                </RadioGroup.Option>
              ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
