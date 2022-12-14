import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ISoul } from "../models";

interface IDSlistProps {
  soulsList: ISoul[];
  page: number;
}

export default function DashboardSoulsList({ soulsList, page }: IDSlistProps) {
  const pageList = soulsList.slice( (page - 1) * 10, 10 + (page - 1) * 10);
  const list = pageList.map((soul, i) => {
    return (
      <div className="soulRow" key={i}>
        <div className="col-1">{(page - 1) * 10 + i + 1}</div>
        <div className="col-2 soul-info">
          <Image src={soul.img} alt="" width={50} height={46} />
          <div className="name-addr">
            <div>{soul.name}</div>
            <div className="address">
              {soul.address.slice(0, 6) +
                "..." +
                soul.address.slice(soul.address.length - 5)}
            </div>
          </div>
        </div>
        <div className="col-3">
          {soul.totalAum ? soul.totalAum.toLocaleString() : 0}
        </div>
        <div className="col-4">{"+" + soul.members}</div>
        <div className="col-5">{soul.diversity}</div>
        <div className="col-6">
          <button className="view-button">View</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="listHead">
        <div className="col-1"></div>
        <div className="col-2" id="name">
          Name
        </div>
        <div className="col-3">Totoal AUM</div>
        <div className="col-4">Members</div>
        <div className="col-5">Diversity</div>
        <div className="col-6"></div>
      </div>
      {list}
    </>
  );
}

function formatAddress(address: string) {}
