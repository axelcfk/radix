import { Avatar, Flex } from "@radix-ui/themes";

export function MyAvatar() {
  return (
    <Flex align="center" gap="4">
      <Avatar
        size="1"
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        fallback="A"
        radius="full"
      />
    </Flex>
  );
}

export default MyAvatar;
