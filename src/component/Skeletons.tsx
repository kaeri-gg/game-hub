import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const Skeletons = () => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xx-2">
        <Card width="300px" m={5}>
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Skeletons;
