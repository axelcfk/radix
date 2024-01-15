import { Button, Flex } from "@radix-ui/themes";

export function DownloadButton() {
  return (
    <Flex gap="3">
      <Button color=" white" variant="soft">
        Download
      </Button>
    </Flex>
  );
}

export default DownloadButton;
