import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { faker } from "@faker-js/faker";
import { BaseTable, textColumnFilter, selectColumnFilter } from "./baseTable";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Tables/BaseTable",
  component: BaseTable,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BaseTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTable> = (args) => {
  const cols = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Filter: textColumnFilter,
        filter: "text",
      },
      {
        Header: "Email",
        accessor: "email",
        Filter: textColumnFilter,
        filter: "text",
      },
      {
        Header: "Post Code",
        accessor: "postCode",
        disableSortBy: true,
      },
      {
        Header: "City",
        accessor: "city",
        Filter: selectColumnFilter,
        filter: "text",
      },
      {
        Header: "Country",
        accessor: "country",
        Filter: selectColumnFilter,
        filter: "text",
      },
      {
        Header: "phoneNumber",
        accessor: "phoneNumber",
        disableSortBy: true,
      },
      {
        Header: "Quote",
        accessor: "favouriteQuote",
        Filter: textColumnFilter,
        filter: "text",
      },
    ],
    []
  );
  let data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      postCode: faker.address.zipCode(),
      city: faker.address.cityName(),
      country: faker.address.country(),
      phoneNumber: faker.phone.number(),
      favouriteQuote: faker.lorem.sentence(),
    });
  }
  delete args.data;
  delete args.columns;
  if (args.error) {
    data = null;
  }
  console.log(args);
  return <BaseTable columns={cols} data={data} {...args} />;
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  isLoading: false,
  isFetching: false,
  error: false,
  initialState: {
    pageSize: 10,
    sortBy: [],
  },
};
Default.parameters = {
  controls: {
    exclude: [
      "data",
      "columns",
      "asyncExpandFunction",
      "getRowProps",
      "initialState",
    ],
  },
};

export const Long = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Long.args = {
  isLoading: false,
  isFetching: false,
  error: false,
  initialState: {
    pageSize: 100000,
    sortBy: [],
  },
};
Long.parameters = {
  controls: {
    exclude: [
      "data",
      "columns",
      "asyncExpandFunction",
      "getRowProps",
      "initialState",
    ],
  },
};

export const Sorted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sorted.args = {
  isLoading: false,
  isFetching: false,
  error: false,
  initialState: {
    pageSize: 10,
    sortBy: [
      {
        id: "name",
        desc: false,
      },
    ],
  },
};
Sorted.parameters = {
  controls: {
    exclude: [
      "data",
      "columns",
      "asyncExpandFunction",
      "getRowProps",
      "initialState",
    ],
  },
};
