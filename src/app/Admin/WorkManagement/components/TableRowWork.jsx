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

const TableRowWork = () => {
  const { showDeleteWorkModal, setShowDeleteWorkModal } = useStateShareContext();
  return (
    <Table.Row className="bg-white">
      <Table.Cell>
        <p className="font-semibold">A4124</p>
      </Table.Cell>
      <Table.Cell>
      <div className="flex items-center gap-3">
          <p>Essay</p>
        </div>
      </Table.Cell>

      <Table.Cell className="text-[13px]">
        1500 words
      </Table.Cell>
      <Table.Cell>
        <div className="flex items-center gap-1 text-[13px]">
          <p>11-05-2024</p>
        </div>
      </Table.Cell>
      <Table.Cell>
        <div className="flex items-center gap-1 text-[13px]">
          <p>2hrs 43mins 2s</p>
        </div>
      </Table.Cell>
      <Table.Cell>
        <Badge color="success" showIcon={true}>
          Completed
        </Badge>
      </Table.Cell>
      <Table.Cell>
        <div className="flex items-center gap-3">
          <p>John Doe</p>
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
              <NavLink to={`/admin/work/:id/edit`}>Edit</NavLink>
            </DropdownItem>
            <DropdownItem
              onClick={() => setShowDeactivateModal(true)}
              key="copy"
            >
              View Submission
            </DropdownItem>
            <DropdownItem
              onClick={() => setShowDeactivateModal(true)}
              key="copy"
            >
              Assign
            </DropdownItem>
            <DropdownItem
              onClick={() => setShowDeleteWorkModal(true)}
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

export default TableRowWork;
