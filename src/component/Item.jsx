import React from "react";

function Item(props) {
  return (
    <div>
      <div
        data-cy="activity-item"
        className="activity-card flex border-4 border-white bg-[#323232] justify-between w-48 p-12 rounded-lg"
      >
        <div className="flex flex-col py-6 ">
          <div className="cursor-pointer" onClick={() => {}}>
            <div data-cy="activity-item-title" className="h-24">
              <h2 className="text-white text-lg  -mt-14 -ml-6 text-left  font-bold">
                {props.bulan}
              </h2>
            </div>
          </div>
          <div
            data-cy="activity-item-date"
            className="card-footer absolute bottom-5 right-24 flex flex-row space-x-5 justify-between order-2"
          >
            <h2 className="text-4xl font-bold">{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
