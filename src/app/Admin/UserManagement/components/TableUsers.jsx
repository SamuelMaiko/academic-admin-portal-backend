import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import { Cube } from "phosphor-react";
import TableRowUsers from "./TableRowUsers";
import { useNavigate } from "react-router-dom";

const TableUsers = () => {
  const navigate = useNavigate();
  return (
    <Table
      showCheckbox={false}
      showBorder={true}
      showBorderPosition="right"
      striped={true}
      hoverable={true}
    >
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Users</p>
            <Badge size="sm" color="secondary">
              1 Member
            </Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button
              onClick={() => navigate("/admin/users/new")}
              className="hover:bg-metal-100 transition-colors duration-300"
              variant="outline"
              size="sm"
            >
              <Cube size={20} className="pr-1" />
              Create User
            </Button>
            <Button variant="outline" size="sm">
              <Cube size={20} className="pr-1" />
              Search
            </Button>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[80px]">Reg. No</Table.HeadCell>
        <Table.HeadCell className="min-w-[200px]">
          <p className="text-body-5 font-medium text-metal-400">Full Name</p>
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[210px]">Email Address</Table.HeadCell>
        <Table.HeadCell className="min-w-[80px]">Role</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]">Submits</Table.HeadCell>
        {/* <Table.HeadCell className="min-w-[100px]" /> */}
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <TableRowUsers />
        <TableRowUsers />
      </Table.Body>
    </Table>
  );
};

export default TableUsers;
