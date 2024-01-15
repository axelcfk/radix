import { Card, Flex, Text } from "@radix-ui/themes";

export function Cards() {
  return (
    <Flex direction="row" gap="3" className="mb-8 h-32">
      <Card variant="surface" className=" w-1/4 p-2">
        <Text as="div" size="2" weight="semibold">
          Total Revenue
        </Text>
        <h2 className=" text-2xl font-extrabold"> $45,231.89 </h2>
        <Text as="div" color="gray" size="2">
          +20.1% from last month{" "}
        </Text>
      </Card>
      <Card variant="surface" className=" w-1/4 p-2">
        <Text as="div" size="2" weight="semibold">
          Subscriptions
        </Text>
        <h2 className=" text-2xl font-extrabold"> +2350 </h2>
        <Text as="div" color="gray" size="2">
          +180.1% from last month{" "}
        </Text>
      </Card>
      <Card variant="surface" className=" w-1/4 p-2">
        <Text as="div" size="2" weight="semibold">
          Sales
        </Text>
        <h2 className=" text-2xl font-extrabold"> +12,234 </h2>
        <Text as="div" color="gray" size="2">
          +19% from last month{" "}
        </Text>
      </Card>
      <Card variant="surface" className=" w-1/4 p-2">
        <Text as="div" size="2" weight="semibold">
          Active Now
        </Text>
        <h2 className=" text-2xl font-extrabold"> +573 </h2>
        <Text as="div" color="gray" size="2">
          +201% from last month{" "}
        </Text>
      </Card>
    </Flex>
  );
}

export default Cards;
