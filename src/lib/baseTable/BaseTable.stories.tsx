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

let data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    ob: { name: faker.name.fullName(), id: faker.datatype.number(9999999) },
    name: faker.name.fullName(),
    email: faker.internet.email(),
    postCode: faker.address.zipCode(),
    city: faker.address.cityName(),
    country: faker.address.country(),
    number: faker.datatype.number(2000),
    bool: faker.datatype.boolean(),
    favouriteQuote: faker.lorem.sentence(),
    htmltest: `<p><strong>${faker.lorem.sentence()}</strong></p>`,
  });
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTable> = (args) => {
  const cols = React.useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Object",
        accessorKey: "ob",
        cell: (row) => (
          <>
            id:{row.getValue().id} name:{row.getValue().name}
          </>
        ),
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Country",
        accessorKey: "country",
        filter: "text",
      },
      {
        header: "Number",
        accessorKey: "number",
        disableSortBy: true,
      },
      {
        header: "Boolean",
        accessorKey: "bool",
        cell: (row) =>
          row.getValue() ? (
            <a className="btn btn-success">
              <i className="fas fa-check-circle"></i>
            </a>
          ) : (
            <a className="btn btn-danger">
              <i className="fas fa-times-circle"></i>
            </a>
          ),
      },
      {
        header: "Quote",
        accessorKey: "favouriteQuote",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "HTML",
        accessorKey: "htmltest",
        enableSorting: false,
        cell: (row) => (
          <div dangerouslySetInnerHTML={{ __html: row.getValue() }} />
        ),
      },
    ],
    []
  );
  delete args.data;
  delete args.columns;

  const rowClasses = (row) => {
    if (row.number > 1000) {
      return "info";
    } else if (row.number > 500) {
      return "warning";
    }
  };
  return (
    <BaseTable columns={cols} data={data} rowClasses={rowClasses} {...args} />
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  rowClasses: undefined,
  isLoading: false,
  isFetching: false,
  debugTable: false,
  error: false,
};
Default.parameters = {
  controls: {
    exclude: ["data", "columns", "asyncExpandFunction"],
  },
};

export const Long = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Long.args = {
  rowClasses: undefined,
  isLoading: false,
  isFetching: false,
  debugTable: false,
  error: false,
  initialState: {
    pagination: {
      pageSize: 100000,
      pageIndex: 0,
    },
  },
};
Long.parameters = {
  controls: {
    exclude: ["data", "columns", "asyncExpandFunction"],
  },
};

export const Sorted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sorted.args = {
  rowClasses: undefined,
  isLoading: false,
  isFetching: false,
  debugTable: false,
  error: false,
  initialState: {
    sorting: [
      {
        id: "name",
        desc: false,
      },
    ],
  },
};
Sorted.parameters = {
  controls: {
    exclude: ["data", "columns", "asyncExpandFunction"],
  },
};

export const Visibility = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Visibility.args = {
  rowClasses: undefined,
  isLoading: false,
  isFetching: false,
  debugTable: false,
  error: false,
  initialState: {
    columnVisibility: {
      name: false,
      number: false,
    },
  },
};
Visibility.parameters = {
  controls: {
    exclude: ["data", "columns", "asyncExpandFunction"],
  },
};

export const OnlyNumbers = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyNumbers.args = {
  rowClasses: undefined,
  isLoading: false,
  isFetching: false,
  debugTable: false,
  error: false,
  initialState: {
    columnVisibility: {
      ob: false,
      email: false,
      country: false,
      bool: false,
      favouriteQuote: false,
      htmltest: false,
    },
  },
};
OnlyNumbers.parameters = {
  controls: {
    exclude: ["data", "columns", "asyncExpandFunction"],
  },
};

export const KitchenSink = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KitchenSink.args = {
  isLoading: false,
  isFetching: false,
  debugTable: false,
  error: false,
  initialState: {
    columnVisibility: {
      name: false,
      number: false,
    },
    sorting: [
      {
        id: "email",
        desc: false,
      },
    ],
    pagination: {
      pageSize: 5,
      pageIndex: 0,
    },
  },
};
KitchenSink.parameters = {
  controls: {
    exclude: ["data", "columns", "asyncExpandFunction"],
  },
};
