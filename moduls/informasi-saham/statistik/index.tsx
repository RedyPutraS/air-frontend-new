import { Container, DonutChart, Title } from "components";
import React from "react";

interface Props {}

function index(props: Props) {
  const {} = props;

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="min-h-[400px] max-h-[500px] sm:max-h-[350px] sm:min-h-[250px] relative pb-24">
          <Title
            label={
              <>
                Prior to PUT III (2019) - IDR <br /> 101.750.000.000{" "}
              </>
            }
            isUnderline={false}
          />
          <div className="mt-5" />
          <DonutChart />
        </div>
        <div className="min-h-[400px] max-h-[500px] sm:max-h-[350px] sm:min-h-[250px] relative pb-24">
          <Title
            label={
              <>
                Prior to PUT III (2009) - IDR <br /> 124.361.111.100{" "}
              </>
            }
            isUnderline={false}
          />
          <div className="mt-5" />
          <DonutChart />
        </div>
      </div>
    </Container>
  );
}

export default index;
