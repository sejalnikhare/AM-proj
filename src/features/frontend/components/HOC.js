import React from "react";

const HOC = (Component, data) => {
  // console.log(Component, data);
  const newComponent = () => {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.no}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  return newComponent;
};
export default HOC;
