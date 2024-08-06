import React from "react";
import {
  ArrowDown,
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from "phosphor-react";
import { Avatar, Badge, Button, Table } from "keep-react";
import Vini from "../../../../assets/Vinijr.jpeg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useStateShareContext } from "../../../../Context/StateContext";
import { NavLink } from "react-router-dom";

const TableRowUsers = () => {
  const { setShowDeactivateModal, setShowDeleteModal } = useStateShareContext();
  return (
    <Table.Row className="bg-white">
      <Table.Cell>
        <p className="font-semibold">A4124</p>
      </Table.Cell>
      <Table.Cell>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                className="size-[3.2rem] object-cover object-top rounded-full overflow-hidden"
                src={Vini}
              />
              <div>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                  Ralph Edwards
                </p>
                {/* <span>&ralph</span> */}
              </div>
            </div>
          </div>
        </div>
      </Table.Cell>

      <Table.Cell className="text-[13px]">
        nevaeh.simmons@example.com
      </Table.Cell>
      <Table.Cell>
        <div className="flex items-center gap-1 text-[13px]">
          <p>Writer</p>
        </div>
      </Table.Cell>
      <Table.Cell>
        <Badge color="success" showIcon={true}>
          Active
        </Badge>
      </Table.Cell>
      <Table.Cell>
        <div className="flex items-center gap-3">
          <p>50</p>
        </div>
      </Table.Cell>
      <Table.Cell>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="outline" size="sm" shape="circle">
              <DotsThreeOutline size={15} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">
              <NavLink to={`/admin/users/:id/edit`}>Edit</NavLink>
            </DropdownItem>
            <DropdownItem
              onClick={() => setShowDeactivateModal(true)}
              key="copy"
            >
              Deactivate
            </DropdownItem>
            <DropdownItem
              onClick={() => setShowDeleteModal(true)}
              key="delete"
              className="text-danger"
              color="danger"
            >
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRowUsers;
