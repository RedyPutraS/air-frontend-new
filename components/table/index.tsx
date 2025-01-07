import React from "react";

interface Props {
  header?: any;
  rows?: any;
  isSide?: any;
  isNumber?: any;
  customHeader?: any;
  customBody?: any;
}

function index(props: Props) {
  const {
    header,
    rows,
    customHeader,
    customBody,
    isSide = false,
    isNumber = false,
  } = props;

  return (
    <table className="w-full mt-5">
      {customHeader ? (
        customHeader
      ) : (
        <thead className="text-white bg-primary">
          <tr className="border border-gray-300">
            {isNumber && (
              <th
                className="p-3 border border-gray-300 w-[50px] font-semibold"
                align="center"
              >
                No
              </th>
            )}
            {header.map((item: any, key: any) => (
              <th
                key={key}
                className="p-3 font-semibold border border-gray-300"
                align="left"
              >
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
      )}

      {customBody ? (
        customBody
      ) : (
        <tbody>
          {rows?.map((item: any, key: any) => (
            <tr
              key={key}
              className={!isSide && key % 2 !== 0 ? "bg-gray-100" : "bg-white"}
            >
              {isSide && (
                <td className={`p-3 border border-gray-300`} align="left">
                  {item.name}
                </td>
              )}
              {isNumber && (
                <td className={`p-3 border border-gray-300`} align="center">
                  {key + 1}
                </td>
              )}

              {header.map((row: any, index: any) => (
                <td
                  key={index}
                  className={`p-3 border border-gray-300 text-sm sm:text-base ${
                    item.name === row.label ? "bg-warning1" : ""
                  }`}
                >
                  {!item[row.value] && !customHeader ? (
                    "-"
                  ) : Array.isArray(item[row.value]) ? (
                    item[row.value].map((item: any, key: any) => (
                      <div
                        key={key}
                        className={
                          item[row.value]?.length - 1 !== key ? "mb-2" : ""
                        }
                      >
                        <div dangerouslySetInnerHTML={{ __html: item }} />
                      </div>
                    ))
                  ) : (
                    <div className={index === 0 ? "text-left" : "text-center"} id={item[row.value]}
                      dangerouslySetInnerHTML={{ __html: item[row.value] }}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default index;
