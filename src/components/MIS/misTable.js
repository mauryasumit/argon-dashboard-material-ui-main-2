import React from "react";
/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import Table from "examples/Tables/Table";
import { useSelector } from "react-redux";

function MisTable() {
  let MIS = useSelector((state) => state.mis);

  // if (!MIS.length) {
  //   MIS = {
  //     mis: [{}],
  //   };
  // }

  console.log({ test: MIS });

  let misColumns = Object.keys(MIS.mis[0] ? MIS.mis[0] : {});
  console.log(misColumns);

  misColumns = misColumns.map((col) => {
    return {
      name: col,
      align: "left",
    };
  });

  let MisRows = MIS.mis.map((element) => {
    return {
      claimId: <Author name={element["claimId"]} email="" />,
      claimType: <Function job={element["claimType"]} org="Organization" />,
      claimSubtype: (
        <ArgonBadge
          variant="gradient"
          badgeContent={element["claimSubtype"]}
          color="success"
          size="xs"
          container
        />
      ),
      claimReceivedDate: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          {element["claimReceivedDate"]}
        </ArgonTypography>
      ),
      invoiceStatus: (
        <ArgonBadge
          variant="gradient"
          badgeContent={element["invoiceStatus"] === 1 ? "Geneartaed" : "Not Created"}
          color={element["invoiceStatus"] === 1 ? "success" : "warnings"}
          size="xs"
          container
        />
      ),
      companyName: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          {element["companyName"]}
        </ArgonTypography>
      ),
      _id: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          {element["_id"]}
        </ArgonTypography>
      ),
    };
  });

  const authorsTableData = {
    columns: misColumns,
    rows: MisRows,
  };
  const { columns, rows } = authorsTableData;

  return <Table columns={columns} rows={rows} />;
}

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="caption" color="secondary">
          {email}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
      <ArgonTypography variant="caption" color="secondary">
        {org}
      </ArgonTypography>
    </ArgonBox>
  );
}

export default MisTable;
