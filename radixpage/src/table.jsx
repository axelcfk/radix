import { Table } from "@radix-ui/themes";
import { MyAvatar } from "./Avatar";
export function MyTable() {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <h2 className=" font-bold text-lg mx-5 mt-5">Recent Sales</h2>
        <h3 className="mx-5">You made 265 sales this month.</h3>
      </Table.Header>

      <Table.Body>
        <div className="flex justify-between mx-5 items-center">
          <div className="flex ">
            <MyAvatar />
            <Table.Row className="flex flex-col ">
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell className=" -mt-5">danilo@example.com</Table.Cell>
            </Table.Row>
          </div>
          <div className="items-center font-bold">+$1,999.00</div>
        </div>

        <div className="flex justify-between mx-5 items-center">
          <div className="flex ">
            <MyAvatar />
            <Table.Row className="flex flex-col ">
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell className=" -mt-5">danilo@example.com</Table.Cell>
            </Table.Row>
          </div>
          <div className="items-center font-bold">+$39.00</div>
        </div>

        <div className="flex justify-between mx-5 items-center">
          <div className="flex ">
            <MyAvatar />
            <Table.Row className="flex flex-col ">
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell className=" -mt-5">danilo@example.com</Table.Cell>
            </Table.Row>
          </div>
          <div className="items-center font-bold">+$299.00</div>
        </div>

        <div className="flex justify-between mx-5 items-center">
          <div className="flex ">
            <MyAvatar />
            <Table.Row className="flex flex-col ">
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell className=" -mt-5">danilo@example.com</Table.Cell>
            </Table.Row>
          </div>
          <div className="items-center font-bold">+$99.00</div>
        </div>

        <div className="flex justify-between mx-5 items-center">
          <div className="flex ">
            <MyAvatar />
            <Table.Row className="flex flex-col ">
              <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
              <Table.Cell className=" -mt-5">danilo@example.com</Table.Cell>
            </Table.Row>
          </div>
          <div className="items-center font-bold">+$39.00</div>
        </div>
      </Table.Body>
    </Table.Root>
  );
}

export default MyTable;
