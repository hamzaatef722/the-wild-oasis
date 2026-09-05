import { useState } from "react";
import Button from "../../ui/Button";
import DateRangeFilter from "../../ui/DateRangeFilter";
import { useAvailableCabins } from "../cabins/useAvailableCabins";
import AvailableCabinsTable from "../cabins/AvailableCabinsTable";

function AvailableCabins() {
  const { availableCabins, isFetching, checkAvailability } =
    useAvailableCabins();

  return (
    <div>
      Create new booking
      <div className="">
        <DateRangeFilter />
        <Button size="small" onClick={checkAvailability} disabled={isFetching}>
          {isFetching ? "Checking..." : "Check availability"}
        </Button>
      </div>
      {availableCabins && (
        <AvailableCabinsTable
          cabins={availableCabins}
          isFetching={isFetching}
        />
      )}
    </div>
  );
}

export default AvailableCabins;
