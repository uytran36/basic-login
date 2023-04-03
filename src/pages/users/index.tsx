import { getAllUsers } from "@/api-services/users";
import useHeaders from "@/hooks/useHeaders";
import Layout from "@/layout/default";
import axios from "axios";
import Link from "next/link";
import React, { ReactElement, useEffect, useState } from "react";
import { userType } from "../../types/userType";
import { NextPageWithLayout } from "../_app";

const Users: NextPageWithLayout = () => {
  const [users, setUsers] = useState<userType[]>([]);
  const headers = useHeaders();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers(headers);
        setUsers(result.data.data);
      } catch (e) {
        console.log({ e });
      }
    };
    fetchData();
  }, [headers]);

  const handleClick = () => {
    let data = [
      {
        price: 16.99,
        name: "Founders All Day IPA",
        rating: 4.411243509154233,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png",
      },
      {
        price: 13.99,
        name: "Blue Moon Belgian White Belgian-Style Wheat Ale",
        rating: 4.775260833383482,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/he8/h67/11931543830558.png",
      },
      {
        price: 16.99,
        name: "Guinness Extra Stout",
        rating: 3.9785961474594638,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h50/h90/11996630056990.png",
      },
      {
        price: 8.99,
        name: "Guinness Extra Stout",
        rating: 3.5135460961961718,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h35/he7/11996577726494.png",
      },
      {
        price: 15.49,
        name: "Sierra Nevada Pale Ale",
        rating: 4.266364643483868,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h19/h43/11735160193054.png",
      },
      {
        price: 15.49,
        name: "Sierra Nevada Pale Ale",
        rating: 3.141161723541611,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h0a/h17/11589987434526.png",
      },
      {
        price: 15.99,
        name: "Lagunitas IPA",
        rating: 1.7610665871324303,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hd2/hfd/11348869382174.png",
      },
      {
        price: 11.99,
        name: "Dogfish Head 120-Minute IPA",
        rating: 3.1053162095618543,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hf7/h2e/8814407614494.png",
      },
      {
        price: 15.49,
        name: "Sierra Nevada Torpedo Extra IPA",
        rating: 1.1092369711087207,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/ha5/h01/8799883329566.png",
      },
      {
        price: 15.99,
        name: "Sierra Nevada Hazy Little Thing IPA",
        rating: 3.9890785544340925,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 14.99,
        name: "New Holland Dragon's Milk",
        rating: 1.2005615080794012,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hf1/hef/11388243083294.png",
      },
      {
        price: 12.99,
        name: "New Belgium Oakspire Bourbon Barrel Ale",
        rating: 2.0996330805016186,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8b/h8f/11475320012830.png",
      },
      {
        price: 7.49,
        name: "Guinness Draught",
        rating: 1.4506545003190645,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hcc/h64/11996579201054.png",
      },
      {
        price: 10.99,
        name: "Dogfish Head 60-Minute IPA",
        rating: 1.3770307904176358,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h17/hc9/10124015599646.png",
      },
      {
        price: 7.99,
        name: "Blue Moon Belgian White Belgian-Style Wheat Ale",
        rating: 4.041128289991199,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h5b/hff/11941592694814.png",
      },
      {
        price: 16.99,
        name: "Guinness Draught",
        rating: 2.9002860700543973,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h66/h6a/11996634775582.png",
      },
      {
        price: 10.99,
        name: "Weihenstephaner Hefe Weissbier",
        rating: 2.89292945072894,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h19/he2/11969419083806.png",
      },
      {
        price: 2.29,
        name: "Cigar City Jai-Alai IPA",
        rating: 3.779669618771213,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hdb/h25/11969380712478.png",
      },
      {
        price: 21.99,
        name: "Bell's Two Hearted Ale",
        rating: 1.768500733899927,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hfc/h84/11735172120606.png",
      },
      {
        price: 12.99,
        name: "Kentucky Bourbon Barrel Ale",
        rating: 2.2328898766089313,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h0f/h40/11931598913566.png",
      },
      {
        price: 12.99,
        name: "Dogfish Head 90-Minute IPA",
        rating: 3.7771776781196387,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hd0/h80/11717909905438.png",
      },
      {
        price: 9.49,
        name: "Sierra Nevada Hazy Little Thing IPA",
        rating: 1.4359814370189987,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h42/h71/11375171207198.png",
      },
      {
        price: 4.99,
        name: "Bell's Double Two Hearted",
        rating: 4.268804254746469,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 11.99,
        name: "Victory Golden Monkey Ale",
        rating: 3.1676642120290497,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hab/ha1/11849258827806.png",
      },
      {
        price: 18.49,
        name: "Founders Underground Mountain Brown",
        rating: 2.1446471059009395,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 10.99,
        name: "Bell's Two Hearted Ale",
        rating: 2.857913327526303,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hd0/h7c/8813760610334.png",
      },
      {
        price: 89.99,
        name: "Blue Moon Belgian White Belgian-Style Wheat Ale",
        rating: 1.508525625330103,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hc2/he9/11975816085534.png",
      },
      {
        price: 11.49,
        name: "Elysian Space Dust IPA",
        rating: 1.56330286120944,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h0f/hb6/11735169466398.png",
      },
      {
        price: 12.49,
        name: "Duvel Belgian Ale",
        rating: 2.5572486237237335,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h0c/h86/8810864082974.png",
      },
      {
        price: 9.99,
        name: "Founders Breakfast Stout",
        rating: 2.536098631569753,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/ha2/he2/8796687728670.png",
      },
      {
        price: 16.79,
        name: "Founders Centennial IPA",
        rating: 4.902598150770166,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h9d/h94/11167126519838.png",
      },
      {
        price: 8.99,
        name: "Lagunitas IPA",
        rating: 4.599331298776508,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h2c/h78/8804310777886.png",
      },
      {
        price: 14.99,
        name: "New Belgium Fat Tire",
        rating: 1.056104104160374,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hee/hb0/8809351217182.png",
      },
      {
        price: 8.49,
        name: "Boddingtons Pub Ale",
        rating: 1.3365664144031921,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hc8/h2c/8806352846878.png",
      },
      {
        price: 7.99,
        name: "Hoegaarden Witbier Blanche",
        rating: 3.565917975071695,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h97/h48/11931669102622.png",
      },
      {
        price: 9.99,
        name: "Lagunitas Daytime IPA",
        rating: 3.7896243815044306,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hd1/h89/11657040003102.png",
      },
      {
        price: 11.49,
        name: "Stone IPA (India Pale Ale)",
        rating: 1.878226983778763,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h26/h91/11770094026782.png",
      },
      {
        price: 9.99,
        name: "Spaten Franziskaner Hefe-Weisse",
        rating: 1.9830030107855592,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h25/h97/8798007754782.png",
      },
      {
        price: 18.99,
        name: "Southern Tier Warlock Imperial Pumpkin Stout",
        rating: 2.043941554653335,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h80/h0d/10734657470494.png",
      },
      {
        price: 19.99,
        name: "Dogfish Head 60-Minute IPA",
        rating: 3.48129639229092,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h5f/h00/10124016648222.png",
      },
      {
        price: 16.99,
        name: "Newcastle Brown Ale",
        rating: 1.0385809111488369,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hf5/h03/11969565622302.png",
      },
      {
        price: 11.49,
        name: "New Belgium Voodoo Ranger Imperial IPA",
        rating: 1.030031658964159,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h06/h57/10672758161438.png",
      },
      {
        price: 9.99,
        name: "Smithwick's Irish Ale",
        rating: 3.344299483944976,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h64/had/11996577431582.png",
      },
      {
        price: 19.99,
        name: "Stone IPA (India Pale Ale)",
        rating: 3.679742063810279,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h80/he9/10140961341470.png",
      },
      {
        price: 11.49,
        name: "Left Hand Milk Stout Nitro",
        rating: 1.5222183530402447,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h2d/haf/8813239762974.png",
      },
      {
        price: 9.99,
        name: "Founders Porter",
        rating: 3.7036191902784807,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h37/h9f/8796760277022.png",
      },
      {
        price: 14.99,
        name: "Shock Top Belgian White Ale",
        rating: 4.02565627585603,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hbe/h78/11891420495902.png",
      },
      {
        price: 10.99,
        name: "Dogfish Head Slightly Mighty IPA",
        rating: 3.518525930659723,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hcd/ha2/11845581078558.png",
      },
      {
        price: 15.99,
        name: "Founders Backwoods Bastard",
        rating: 3.0187543429516914,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8f/h35/11536035217438.png",
      },
      {
        price: 16.99,
        name: "Goose Island IPA",
        rating: 1.1082348289013026,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hb3/h9b/11444657618974.png",
      },
      {
        price: 18.49,
        name: "Stone Farking Wheaton w00tstout",
        rating: 3.3898938755564823,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 7.99,
        name: "Kona Big Wave Golden Ale",
        rating: 4.216231501611103,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hb9/h8e/8797338894366.png",
      },
      {
        price: 10.99,
        name: "North Coast Old Rasputin Imperial Stout",
        rating: 1.7226627560750893,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h25/h63/11770107363358.png",
      },
      {
        price: 9.99,
        name: "Lagunitas A Little Sumpin Sumpin",
        rating: 3.5321444435967244,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hdb/h96/10856913207326.png",
      },
      {
        price: 21.49,
        name: "Chimay Grande Reserve Blue",
        rating: 4.7937905748912435,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8a/h92/8798154031134.png",
      },
      {
        price: 13.99,
        name: "Ballast Point Sculpin IPA",
        rating: 1.0633744801576714,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/he7/hcf/11969504673822.png",
      },
      {
        price: 12.99,
        name: "Stone Fear.Movie.Lions Double IPA",
        rating: 4.193323291786882,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h78/hdf/11797725052958.png",
      },
      {
        price: 7.99,
        name: "New Belgium Fat Tire",
        rating: 4.36964965425013,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hfa/hc0/11805929209886.png",
      },
      {
        price: 87.99,
        name: "New Belgium Fat Tire",
        rating: 4.492195528374378,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h5f/h1f/9781897035806.png",
      },
      {
        price: 10.99,
        name: "New Belgium Trippel Belgian Style Ale",
        rating: 2.6576216939051998,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hc7/h44/11464107982878.png",
      },
      {
        price: 1.99,
        name: "Paulaner Hefe Weizen",
        rating: 2.224460075596946,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h7f/h64/8820569014302.png",
      },
      {
        price: 10.99,
        name: "Dogfish Head SeaQuenchAle",
        rating: 2.604050274543601,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h60/h11/10124017303582.png",
      },
      {
        price: 20.99,
        name: "St Bernardus Abt 12",
        rating: 1.0089880840508387,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hcc/h30/10728889778206.png",
      },
      {
        price: 36.99,
        name: "Dogfish Head World Wide Stout",
        rating: 1.1643783197497646,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8c/h4e/10657395245086.png",
      },
      {
        price: 9.99,
        name: "Unibroue - La Fin Du Monde",
        rating: 2.514476444565455,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8c/hcd/8800920829982.png",
      },
      {
        price: 9.49,
        name: "Sierra Nevada Pale Ale",
        rating: 4.017110604857885,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h05/h54/11589988024350.png",
      },
      {
        price: 8.99,
        name: "Blue Moon Mango Wheat",
        rating: 3.7853182263516203,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hed/h46/11170760327198.png",
      },
      {
        price: 12.99,
        name: "Oskar Blues Death By Coconut",
        rating: 2.499562698383815,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/ha6/h87/9664767787038.png",
      },
      {
        price: 16.49,
        name: "New Belgium Voodoo Ranger IPA",
        rating: 1.3981363388800485,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h5d/h93/10675772489758.png",
      },
      {
        price: 14.99,
        name: "Kona Big Wave Golden Ale",
        rating: 3.366369397953016,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8a/hcc/12027169669150.png",
      },
      {
        price: 8.99,
        name: "Guinness Foreign Extra Stout",
        rating: 3.955232912250458,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h64/h42/11996578906142.png",
      },
      {
        price: 15.99,
        name: "Schofferhofer Hefeweizen Grapefruit",
        rating: 2.887846830566846,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hb5/hd5/11358023155742.png",
      },
      {
        price: 13.99,
        name: "Ballast Point Sculpin IPA",
        rating: 1.4983124359520046,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h54/h09/11969425702942.png",
      },
      {
        price: 11.49,
        name: "Stone Arrogant Bastard Ale",
        rating: 4.476922876044725,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h7a/h9c/11770097860638.png",
      },
      {
        price: 13.49,
        name: "Ballast Point Grapefruit Sculpin IPA",
        rating: 2.2181579436694605,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h2e/h8e/11969407221790.png",
      },
      {
        price: 9.99,
        name: "Oskar Blues Dale's Pale Ale",
        rating: 1.0189692403493238,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h2f/h10/8804817240094.png",
      },
      {
        price: 13.99,
        name: "Chimay Grande Reserve Blue",
        rating: 3.3233628692606922,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h43/hf5/8820567834654.png",
      },
      {
        price: 17.49,
        name: "Boulevard Bourbon Barrel Quad",
        rating: 3.3608031669590206,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h6b/ha4/10501577375774.png",
      },
      {
        price: 9.49,
        name: "Hofbrau Hefe Weizen",
        rating: 3.1129695093601795,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h08/h77/8816818946078.png",
      },
      {
        price: 14.99,
        name: "Boulevard Tank 7 Farmhouse Ale",
        rating: 2.525521586557562,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h41/h0f/12021147697182.png",
      },
      {
        price: 2.99,
        name: "Samuel Smith's Organic Chocolate Stout",
        rating: 4.1555247865397416,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h37/ha6/8803802054686.png",
      },
      {
        price: 2.79,
        name: "Bell's Special Double Cream Stout",
        rating: 3.682967725411885,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h73/h11/8803018965022.png",
      },
      {
        price: 9.99,
        name: "Founders Dirty Bastard Ale",
        rating: 3.970086617125669,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h6b/ha2/8806269812766.png",
      },
      {
        price: 11.79,
        name: "Achouffe La Chouffe",
        rating: 3.800563812674647,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/ha0/h87/10140920315934.png",
      },
      {
        price: 17.99,
        name: "Founders Mosaic Promise",
        rating: 4.052128197668433,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h32/hca/10698194583582.png",
      },
      {
        price: 22.99,
        name: "Stone Delicious IPA",
        rating: 4.437512706307549,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/ha2/h39/12007074758686.png",
      },
      {
        price: 10.99,
        name: "Rogue Batsquatch Hazy IPA",
        rating: 4.502906484625454,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hc3/h11/11931839692830.png",
      },
      {
        price: 11.49,
        name: "New Belgium Voodoo Ranger Juicy Haze IPA",
        rating: 4.800191829796816,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 17.99,
        name: "Boulevard Whiskey Barrel Stout",
        rating: 3.7756782589755353,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h69/h85/11443360235550.png",
      },
      {
        price: 9.99,
        name: "Lagunitas Maximus IPA",
        rating: 3.641323719494787,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h45/h8f/9418350657566.png",
      },
      {
        price: 12.99,
        name: "Offshoot Relax (It's Just a Hazy IPA)",
        rating: 4.169674694322197,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h90/h58/11311020245022.png",
      },
      {
        price: 12.99,
        name: "Sixpoint Resin",
        rating: 3.1029248482584535,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hf5/hfb/10657396424734.png",
      },
      {
        price: 99.99,
        name: "Cigar City Jai-Alai IPA",
        rating: 1.0601853988027745,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hdc/h98/9781940322334.png",
      },
      {
        price: 12.99,
        name: "Wicked Weed Pernicious IPA",
        rating: 1.3267940892543262,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 12.99,
        name: "Dogfish Head SuperEIGHT",
        rating: 2.4587302813711283,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 6.99,
        name: "Rochefort 10 Trappist Ale",
        rating: 2.6243993844011806,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hcc/h4a/8803981787166.png",
      },
      {
        price: 18.99,
        name: "Delirium Tremens",
        rating: 4.2526903890313905,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h05/ha0/8804687970334.png",
      },
      {
        price: 8.99,
        name: "Lagunitas SuperCluster",
        rating: 4.969725976340016,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 12.99,
        name: "New Holland Dragon's Milk White Stout",
        rating: 2.62207680296948,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 7.99,
        name: "Goose Island IPA",
        rating: 4.002017823140871,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h39/h7f/9985249247262.png",
      },
      {
        price: 13.49,
        name: "Ballast Point Grapefruit Sculpin IPA",
        rating: 2.924150050325185,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h14/h10/11969425997854.png",
      },
      {
        price: 1.79,
        name: "Sierra Nevada Torpedo Extra IPA",
        rating: 4.132209648216585,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h88/h47/8796708962334.png",
      },
      {
        price: 10.99,
        name: "Duclaw Sweet Baby Jesus!",
        rating: 4.089769886898315,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hb1/h21/9351707328542.png",
      },
      {
        price: 16.99,
        name: "Lagunitas Sumpin' Easy",
        rating: 1.3485746897254929,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h29/h71/11312566894622.png",
      },
      {
        price: 12.99,
        name: "Lord Hobo Boom Sauce",
        rating: 4.271835995644435,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h28/h24/11544524718110.png",
      },
      {
        price: 12.99,
        name: "Weihenstephaner Vitus",
        rating: 1.3135036691160673,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/he4/hd0/11969417609246.png",
      },
      {
        price: 12.79,
        name: "New Belgium Voodoo Ranger Juicifer IPA",
        rating: 3.9492021918949725,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 12.99,
        name: "Lindeman's Framboise",
        rating: 2.7519071827960273,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 14.99,
        name: "Dogfish Head Palo Santo Marron",
        rating: 2.4190073235744673,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hbe/h3c/10225139908638.png",
      },
      {
        price: 15.49,
        name: "Clown Shoes Space Cake",
        rating: 4.883356891746129,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 9.99,
        name: "Bell's Best Brown Ale",
        rating: 2.6802502419403025,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/heb/h89/8815740649502.png",
      },
      {
        price: 11.99,
        name: "Victory Golden Monkey Ale",
        rating: 3.223867503577261,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h2e/h20/11849258532894.png",
      },
      {
        price: 8.99,
        name: "Erdinger Weissbier",
        rating: 3.9267369526916545,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h61/hda/8820602109982.png",
      },
      {
        price: 10.99,
        name: "Robinsons Trooper Ale",
        rating: 3.834032592144709,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h42/hf3/10675674120222.png",
      },
      {
        price: 3.99,
        name: "Kentucky Coffee Barrel Stout",
        rating: 1.335718639280703,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h25/h7f/11931443626014.png",
      },
      {
        price: 9.99,
        name: "21st Amendment Brew Free Or Die Blood Orange IPA",
        rating: 4.894730680324359,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h7d/had/11170752692254.png",
      },
      {
        price: 9.49,
        name: "Kronenbourg Blanc",
        rating: 2.7826152662684214,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8c/ha4/9354116857886.png",
      },
      {
        price: 10.99,
        name: "Bell's Official Hazy IPA",
        rating: 4.4548183643373855,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 8.99,
        name: "Cigar City Maduro Brown",
        rating: 2.6831070228729246,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8f/heb/11589816057886.png",
      },
      {
        price: 20.99,
        name: "Gulden Draak 9000 Quadrupel",
        rating: 2.7633099153167375,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h71/h01/8800490422302.png",
      },
      {
        price: 10.99,
        name: "Bell's Two Hearted Ale",
        rating: 3.086009671445667,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 9.99,
        name: "Sierra Nevada Hop Bullet",
        rating: 4.606551938913049,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 8.99,
        name: "Sweetwater 420 Strain G-13",
        rating: 4.176603737571783,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 19.99,
        name: "Tripel Karmeliet",
        rating: 3.5888947699078804,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h7f/h6e/8797892739102.png",
      },
      {
        price: 8.49,
        name: "New Belgium Voodoo Ranger IPA",
        rating: 4.107273030523367,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h2c/h7e/10508834045982.png",
      },
      {
        price: 92.99,
        name: "Kona Big Wave Golden Ale",
        rating: 1.4034451390194747,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h90/hfb/9687556685854.png",
      },
      {
        price: 9.99,
        name: "Heavy Seas Loose Cannon IPA",
        rating: 4.2247057118155755,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hba/h54/11931504771102.png",
      },
      {
        price: 9.49,
        name: "Newcastle Brown Ale",
        rating: 1.3062165130061514,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h2e/he3/10072387780638.png",
      },
      {
        price: 15.99,
        name: "Ommegang Three Philosophers",
        rating: 3.7650339790702576,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h39/h4a/9382849708062.png",
      },
      {
        price: 7.49,
        name: "Shock Top Belgian White Ale",
        rating: 3.5245058222634285,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hf6/h53/11891418136606.png",
      },
      {
        price: 19.49,
        name: "Duchesse De Bourgogne",
        rating: 3.7854120339206645,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h1d/h1c/8804202479646.png",
      },
      {
        price: 9.49,
        name: "New Belgium Fat Tire Belgian White",
        rating: 3.079965625452034,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hb5/hd4/11698320834590.png",
      },
      {
        price: 10.49,
        name: "Cigar City Guayabera Citra Pale Ale",
        rating: 4.146664357611568,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h4a/h12/11401918382110.png",
      },
      {
        price: 13.99,
        name: "Dogfish Head American Beauty",
        rating: 2.1059576853999387,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hc1/hc4/11797694316574.png",
      },
      {
        price: 11.49,
        name: "Old Speckled Hen",
        rating: 2.3637872222112417,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h18/h7e/8804595925022.png",
      },
      {
        price: 10.99,
        name: "Samuel Smith's Oatmeal Stout",
        rating: 3.755651312235952,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hf4/h32/8802976104478.png",
      },
      {
        price: 1.99,
        name: "Foster's Special Bitter",
        rating: 3.345153453413597,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hd3/hf0/11941521293342.png",
      },
      {
        price: 8.99,
        name: "Kona Hanalei Island IPA",
        rating: 3.861066233750919,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hc4/h25/9947401158686.png",
      },
      {
        price: 12.99,
        name: "Gaffel Kolsch",
        rating: 3.5860968066070953,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h4d/h45/8804792565790.png",
      },
      {
        price: 9.99,
        name: "Left Hand Milk Stout Nitro",
        rating: 4.726783116573011,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h13/hcc/10950394413086.png",
      },
      {
        price: 8.99,
        name: "Paulaner Hefe Weizen",
        rating: 2.290946882490756,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 11.49,
        name: "Stone Tangerine Express IPA",
        rating: 2.4853029525964736,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h44/h41/12007072989214.png",
      },
      {
        price: 15.99,
        name: "Samuel Adams Rebel IPA",
        rating: 2.8238527317268174,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h4f/h71/8807125319710.png",
      },
      {
        price: 8.49,
        name: "Bass Ale",
        rating: 4.05017330128582,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h83/he6/11931937210398.png",
      },
      {
        price: 20.49,
        name: "Chimay Premiere Red",
        rating: 3.240237215285262,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8c/hec/8804559716382.png",
      },
      {
        price: 11.99,
        name: "Duvel Tripel Hop",
        rating: 1.7576812202358694,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h47/h64/10126441840670.png",
      },
      {
        price: 11.99,
        name: "Tripel Karmeliet",
        rating: 2.0935730249494418,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h92/h87/8820300283934.png",
      },
      {
        price: 11.99,
        name: "Rogue Hazelnut Brown Nectar",
        rating: 1.9354656518898867,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h53/hf1/11139791421470.png",
      },
      {
        price: 19.99,
        name: "Chimay Cinq Cents White Triple",
        rating: 3.750476125324088,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hb8/h2f/8804746330142.png",
      },
      {
        price: 8.99,
        name: "Cigar City Florida Cracker Belgian-style White Ale",
        rating: 3.6242276941091225,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h33/h59/11589816352798.png",
      },
      {
        price: 12.99,
        name: "New Belgium Honey Orange Tripel",
        rating: 4.180322318620529,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h03/h93/11375132606494.png",
      },
      {
        price: 14.79,
        name: "Dogfish Head Flesh and Blood IPA",
        rating: 3.250643535696838,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hdd/hba/10124016943134.png",
      },
      {
        price: 17.99,
        name: "Bell's Expedition Stout",
        rating: 3.717992549497703,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h60/hb2/8800955105310.png",
      },
      {
        price: 11.49,
        name: "Duchesse De Bourgogne",
        rating: 2.524190913111866,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h8f/h1d/8801000161310.png",
      },
      {
        price: 14.99,
        name: "Westmalle Tripel Trappist Ale",
        rating: 2.209130924062644,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hb1/hd1/8798192369694.png",
      },
      {
        price: 3.99,
        name: "Weihenstephaner HefeWeissbier Dark",
        rating: 3.434066764526942,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h43/h4b/10734629224478.png",
      },
      {
        price: 8.99,
        name: "Fuller's London Pride",
        rating: 4.788464936323404,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/had/h2c/9770875682846.png",
      },
      {
        price: 16.49,
        name: "SweetWater 420 Pale Ale",
        rating: 1.5438991712581398,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h38/h5f/11508996374558.png",
      },
      {
        price: 16.99,
        name: "Sweetwater 420 Strain G-13",
        rating: 4.032524982682152,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 9.99,
        name: "Lagunitas Hop Stoopid Ale",
        rating: 2.0824476203303357,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h59/hc4/11213336576030.png",
      },
      {
        price: 114.99,
        name: "Dogfish Head 60-Minute IPA",
        rating: 1.630334145085353,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h52/h71/9789269934110.png",
      },
      {
        price: 9.99,
        name: "Founders All Day IPA",
        rating: 4.008025403767698,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h13/hd3/11891418726430.png",
      },
      {
        price: 8.49,
        name: "Unibroue - La Fin Du Monde",
        rating: 2.8047611369349283,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h74/h43/8804124753950.png",
      },
      {
        price: 15.99,
        name: "Oskar Blues Ten FIDY",
        rating: 2.9788154999137637,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hc1/h8e/11465945481246.png",
      },
      {
        price: 10.99,
        name: "Anderson Valley GOSE Blood Orange",
        rating: 3.1066752148241683,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h4a/h43/11635363905566.png",
      },
      {
        price: 12.49,
        name: "Lindeman's Peche",
        rating: 3.0755646338784075,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h3a/hf0/8810013884446.png",
      },
      {
        price: 12.49,
        name: "Stone Scorpion Bowl IPA",
        rating: 2.733436034499219,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h49/h76/11443412828190.png",
      },
      {
        price: 15.99,
        name: "Dogfish Head Burton Baton",
        rating: 3.926503869642703,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hae/haf/10124015304734.png",
      },
      {
        price: 14.99,
        name: "Boulevard The Calling IPA",
        rating: 1.5012371833611837,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hec/hc3/11192440225822.png",
      },
      {
        price: 4.99,
        name: "Delirium Red",
        rating: 3.329751337964476,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 1.99,
        name: "Karbach Love Street Summer",
        rating: 4.620266818178933,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h47/hf1/10777645285406.png",
      },
      {
        price: 11.99,
        name: "Einstok Icelandic White Ale",
        rating: 4.81471460936719,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h66/h62/11234593931294.png",
      },
      {
        price: 9.99,
        name: "Dogfish Head 90-Minute IPA",
        rating: 3.8590704317769315,
        image:
          "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      },
      {
        price: 10.99,
        name: "Anderson Valley Briney Melon Gose",
        rating: 1.6308706827038444,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h0b/hbe/11635387465758.png",
      },
      {
        price: 8.99,
        name: "Boulevard Space Camper Cosmic IPA",
        rating: 1.0521580970660143,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hff/h26/11735207706654.png",
      },
      {
        price: 17.99,
        name: "Piraat Ale",
        rating: 4.94233495501944,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h67/he1/9071469920286.png",
      },
      {
        price: 6.49,
        name: "Lindeman's Framboise",
        rating: 3.749494609725903,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h6e/h57/10225140629534.png",
      },
      {
        price: 13.99,
        name: "Blue Moon Belgian White Belgian-Style Wheat Ale",
        rating: 2.323260489551802,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h54/h53/11931543535646.png",
      },
      {
        price: 9.99,
        name: "Founders All Day IPA",
        rating: 5,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/hcb/h02/11891413352478.png",
      },
      {
        price: 11.99,
        name: "Chimay Cinq Cents White Triple",
        rating: 1.997464538301898,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h67/h22/8801543749662.png",
      },
      {
        price: 11.99,
        name: "Surbhi",
        rating: 1.997464538301898,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h67/h22/8801543749662.png",
      },
      {
        price: 11.99,
        name: "Singh",
        rating: 1.997464538301898,
        image:
          "https://www.totalwine.com/media/sys_master/twmmedia/h67/h22/8801543749662.png",
      },
    ];

    for (let item of data) {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:9001/beers",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InV5dHJhbjM2Iiwic3ViIjo5LCJpYXQiOjE2Nzk5MDkxMTAsImV4cCI6MTY3OTkzMDcxMH0.PRC_1gur_fISYYdb-XmdRadYbYAU3klQv4EYyfQkJ7E",
        },
        data: item,
      };

      axios
        .request(config)
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="py-10">
      <table className="table-auto m-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.firstName}</td>
              <td className="border px-4 py-2">{user.lastName}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.phoneNumber}</td>
              <td className="border px-4 py-2">
                <Link
                  href={`/users/${user.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button disabled onClick={handleClick}>
        click me
      </button>
      {/* <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div> */}
    </div>
  );
};

Users.getLayout = function getLayout(page: ReactElement) {
  return <Layout tabActive="List Users">{page}</Layout>;
};

export default Users;
