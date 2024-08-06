import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import { Cube } from "phosphor-react";
import TableRowWork from "./TableRowWork";
import { useNavigate } from "react-router-dom";

const TableWork = () => {
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
            <p className="text-body-1 font-semibold text-metal-600">Work</p>
            <Badge size="sm" color="secondary">
              2 tasks
            </Badge>
          </div>
          <div className="flex items-center gap-5">
            <Button
              onClick={() => navigate("/admin/work/new")}
              className="hover:bg-metal-100 transition-colors duration-300"
              variant="outline"
              size="sm"
            >
              <Cube size={20} className="pr-1" />
              Create Work
            </Button>
            <Button variant="outline" size="sm">
              <Cube size={20} className="pr-1" />
              Search
            </Button>
          </div>
        </div>
      </Table.Caption>
      <Table.Head>
        <Table.HeadCell className="min-w-[80px]">Work Id</Table.HeadCell>
        <Table.HeadCell className="min-w-[85px]">
          <p className="text-body-5 font-medium text-metal-400">Type</p>
        </Table.HeadCell>
        <Table.HeadCell className="min-w-[80px]">Words</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]">Deadline</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]">Countdown</Table.HeadCell>
        <Table.HeadCell className="min-w-[80px]">Status</Table.HeadCell>
        <Table.HeadCell className="min-w-[100px]">Assigned</Table.HeadCell>

        {/* <Table.HeadCell className="min-w-[100px]" /> */}
      </Table.Head>
      <Table.Body className="divide-gray-25 divide-y">
        <TableRowWork />
        <TableRowWork />
      </Table.Body>
    </Table>
  );
};

export default TableWork;
