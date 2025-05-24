// "use client";
// import React, { useEffect } from "react";
import { data } from "@/public/api/data";
import Image from "next/image";
import clsx from "clsx";
import DialogSub from "@/components/DialogSub";
import Sub from "@/components/Sub";
import BGCube from "@/public/bg-cube.png";
import Comic01 from "@/public/comic-01.png";
import Comic02 from "@/public/comic-02.png";
import Comic03 from "@/public/comic-03.png";
import DogS from "@/public/dog-s.png";
import DogM from "@/public/dog-m.png";
import DogL from "@/public/dog-l.png";
import GoodPet from "@/public/獎勵零食.png";
import AddWater from "@/public/加水.png";
import Stir from "@/public/攪拌.png";

export function FootPrint({ className }) {
  // const route = useRouter();
  // useEffect(() => {
  //   console.log(route);
  //   // if(sessionStorage.getItem("id")!=="petcook"){
  //   //   route.push("/")
  //   // };
  // }, []);
  return (
    <svg
      width="274"
      height="274"
      viewBox="0 0 274 274"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.5875 18.1434C74.3359 7.82267 84.9601 0.262451 97.1575 0.262451C109.355 0.262451 119.979 7.81023 126.728 18.1309C133.476 28.4516 137.055 41.7939 137.055 56.218C137.055 70.6421 133.476 83.9719 126.728 94.2926C119.979 104.613 109.355 112.174 97.1575 112.174C84.9601 112.174 74.3359 104.626 67.5875 94.3051C60.839 83.9844 57.2596 70.6421 57.2596 56.218C57.2596 41.7939 60.839 28.464 67.5875 18.1434ZM137.055 56.218C137.055 41.7939 140.635 28.464 147.383 18.1434C154.132 7.82267 164.756 0.262451 176.953 0.262451C189.151 0.262451 199.775 7.81023 206.523 18.1309C213.272 28.4516 216.851 41.7939 216.851 56.218C216.851 70.6421 213.272 83.9719 206.523 94.2926C199.775 104.613 189.151 112.174 176.953 112.174C164.767 112.174 154.132 104.626 147.383 94.3051C140.635 83.9844 137.055 70.6421 137.055 56.218ZM10.5905 105.185C17.339 94.8646 27.9632 87.3044 40.1606 87.3044C52.3579 87.3044 62.9821 94.8522 69.7306 105.173C76.479 115.494 80.0584 128.836 80.0584 143.26C80.0584 157.684 76.479 171.014 69.7306 181.335C62.9821 191.655 52.3579 199.215 40.1606 199.215C27.9632 199.215 17.339 191.668 10.5905 181.347C3.84211 171.026 0.262695 157.684 0.262695 143.26C0.262695 128.836 3.84211 115.506 10.5905 105.185ZM204.38 105.185C211.129 94.8646 221.753 87.3044 233.95 87.3044C246.148 87.3044 256.772 94.8522 263.52 105.173C270.269 115.494 273.848 128.836 273.848 143.26C273.848 157.684 270.269 171.014 263.52 181.335C256.772 191.655 246.148 199.215 233.95 199.215C221.753 199.215 211.129 191.668 204.38 181.347C197.632 171.026 194.052 157.684 194.052 143.26C194.052 128.836 197.632 115.506 204.38 105.185Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M137.055 137.043C121.86 137.043 111.259 147.799 106.049 157.249C100.874 166.699 97.6819 174.558 94.6496 177.84C92.9055 179.793 81.9051 184.306 70.4373 190.685C64.7034 193.881 58.9239 198.146 54.0564 204.674C49.1547 211.202 45.8489 220.218 45.8489 230.327C45.8489 254.201 63.8599 273.848 85.7467 273.848C95.6186 273.848 105.924 270.366 116.012 267.257C126.146 264.074 137.055 261.388 137.055 261.388C137.055 261.388 147.965 264.074 158.076 267.233C168.176 270.341 178.481 273.823 188.353 273.823C210.239 273.823 228.25 254.176 228.25 230.302C228.25 220.429 224.91 211.401 220.043 205.06C215.198 198.681 209.362 194.739 203.673 191.444C192.274 184.854 181.068 179.631 179.45 177.84C176.714 174.893 173.636 166.774 168.392 157.274C163.16 147.736 152.331 137.043 137.055 137.043Z"
        fill="white"
      />
    </svg>
  );
}

export default function Page({ params }) {
  const { id } = params;
  const product = data
    .filter((item) => item.product_name === decodeURI(id))
    .map((item) => item);

  return (
    <div className="layout">
      {product.length > 0 ? (
        <>
          {product[0].block1 && (
            <div className="img-content-block section">
              <div className="slogan">{product[0].block1.slogan}</div>
              <div className="img-content-block__content">
                <FootPrint className="foot-print left" />
                <FootPrint className="foot-print top" />
                <Image
                  alt=""
                  src={product[0].block1.img}
                  width={660}
                  height={462}
                  className="img-content-block__content__img"
                />
                <div className="img-content-block__content__left">
                  <div className="img-content-block__content__title">
                    {product[0].product_name}
                    <div className="img-content-block__content__subtitle">
                      {product[0].block1.subtitle[0]}
                      <span>{product[0].block1.subtitle[1]}</span>
                      {product[0].block1.subtitle[2]}
                    </div>
                  </div>
                  <div className="img-content-block__content__description">
                    {product[0].block1.description}
                  </div>
                </div>
              </div>
            </div>
          )}
          {product[0].block2 && (
            <div className="table-block section">
              <Sub sub={product[0].block2.subtitle} />
              <div className="main-title compare-title">
                {product[0].block2.title}
              </div>
              <div className="table-PC">
                <div className="table-PC__header">
                  <span className="th">{product[0].block2.headerTH1}</span>
                  <span className="th">{product[0].block2.headerTH2}</span>
                </div>
                <div className="table-PC__body">
                  <div className="tr">
                    <span className="td">
                      {product[0].block2.bodyTD1_1}
                      {product[0].block2.bodyTD1 === "1" && (
                        <>
                          <FootPrint className="win" />
                        </>
                      )}
                    </span>
                    <div className="th">飼養方式</div>
                    <span className="td">{product[0].block2.bodyTD1_2}</span>
                  </div>
                  <hr className="divide" />
                  <div className="tr">
                    <span className="td">
                      {product[0].block2.bodyTD2_1}
                      {product[0].block2.bodyTD2 === "1" && (
                        <>
                          <FootPrint className="win" />
                        </>
                      )}
                    </span>
                    <div className="th">脂肪含量</div>
                    <span className="td">{product[0].block2.bodyTD2_2}</span>
                  </div>
                  <hr className="divide" />
                  <div className="tr">
                    <span className="td">
                      {product[0].block2.bodyTD3_1}
                      {product[0].block2.bodyTD3 === "1" && (
                        <>
                          <FootPrint className="win" />
                        </>
                      )}
                    </span>
                    <div className="th">營養成分</div>
                    <span className="td">{product[0].block2.bodyTD3_2}</span>
                  </div>
                  <hr className="divide" />
                  <div className="tr">
                    <span className="td">
                      {product[0].block2.bodyTD4_1}
                      {product[0].block2.bodyTD4 === "1" && (
                        <>
                          <FootPrint className="win" />
                        </>
                      )}
                    </span>
                    <div className="th">肉質風味</div>
                    <span className="td">{product[0].block2.bodyTD4_2}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {product[0].block3 && (
            <div className="content-img-block section">
              <div className="content-img-block__left">
                <DialogSub
                  sub={product[0].block3.subtitle}
                  title={product[0].block3.title}
                />
                <div className="content-img-block__content">
                  {product[0].block3.description}
                </div>
              </div>
              <div className="content-img-block__right">
                <Image
                  alt=""
                  src={BGCube}
                  width={554}
                  height={354}
                  className="content-img-block__right__bg"
                />
                <Image
                  alt=""
                  src={product[0].block3.img}
                  width={340}
                  height={458}
                  className="content-img-block__right__product"
                />
                <div className="footprint-group">
                  <FootPrint className="foot-print" />
                  <FootPrint className="foot-print" />
                  <FootPrint className="foot-print" />
                  <FootPrint className="foot-print" />
                </div>
              </div>
            </div>
          )}
          {product[0].block4 && (
            <div className="banner-block section">
              <Sub sub={product[0].block4.subtitle} />
              <div className="main-title">{product[0].block4.title}</div>
              <div className="banner-block__banner">
                <div className="banner-block__banner__mask">
                  <Image
                    src={product[0].block4.img}
                    width={1130}
                    height={622}
                    alt=""
                    className="banner-block__banner__img"
                  />
                </div>
                <div className="tag-group">
                  {product[0].block4.tags?.map((item) => (
                    <div className="tag" key={item}>
                      #{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {product[0].type === "dog" && (
            <div className="card-block section">
              <DialogSub
                sub={"酥脆骰子切塊"}
                title={"建議餵食方式與攝取量"}
                position={"center"}
                color={"orange"}
              />
              <div className="card-block__content">
                <div className="card-block__content__item s">
                  <Image
                    src={DogS}
                    alt=""
                    width={290}
                    height={290}
                    className="dog"
                  />
                  <div className="card-block__content__text">
                    <div className="title" data-stroke="小型犬 (<5kg)">
                      小型犬
                      {"(<5kg)"}
                    </div>
                    1~2 顆
                  </div>
                </div>
                <div className="card-block__content__item m">
                  <Image
                    src={DogM}
                    alt=""
                    width={290}
                    height={290}
                    className="dog"
                  />
                  <div className="card-block__content__text">
                    <div className="title" data-stroke="中型犬 (5–10kg)">
                      中型犬 (5–10kg)
                    </div>
                    2~4 顆
                  </div>
                </div>
                <div className="card-block__content__item l">
                  <Image
                    src={DogL}
                    alt=""
                    width={290}
                    height={290}
                    className="dog"
                  />
                  <div className="card-block__content__text">
                    <div className="title" data-stroke="大型犬 (10kg 以上)">
                      大型犬 (10kg 以上)
                    </div>
                    4 顆以上，依情況調整
                  </div>
                </div>
                <div className="note">
                  \ 食用建議 /<br />
                  日常獎勵或營養補充皆適用，不適合作為主食大量食用喔！
                </div>
              </div>
              <div className="note">
                \ 食用建議：日常獎勵或營養補充皆適用，不適合作為主食大量食用喔！
                /
              </div>
            </div>
          )}
          {product[0].block5 && (
            <div className="dialog-block section">
              <Sub sub={product[0].block5.subtitle} />
              <div className="main-title">{product[0].block5.title}</div>
              <div className="dialog-block__content">
                <div className="dialog-block__content__group">
                  <Image src={GoodPet} alt="" width={300} height={300} />
                  <div className="dialog-block__content__text">
                    <span className="highlight">推薦 1</span>
                    <br />
                    可依滿孩入口尺寸
                    <br />
                    作為日常零食或獎勵點心
                  </div>
                </div>
                <div className="dialog-block__content__group">
                  <div className="dialog-block__content__text">
                    <span className="highlight">推薦 2</span>
                    <br />
                    將凍乾剝碎撒在主食飼料拌入
                    <br />
                    提升毛孩食慾及攝水量
                  </div>
                  <Image src={AddWater} alt="" width={300} height={300} />
                </div>
                <div className="dialog-block__content__group">
                  <Image src={Stir} alt="" width={300} height={300} />
                  <div className="dialog-block__content__text">
                    <span className="highlight">推薦 3</span>
                    <br />
                    年長或牙口不佳者
                    <br />
                    可將凍乾加水還原成鮮肉再給毛孩食用
                  </div>
                </div>
              </div>
            </div>
          )}
          {product[0].block_report && (
            <>
              <div className="report-block section">
                <Sub sub={product[0].block_report.subtitle} />
                <div className="main-title">
                  {product[0].block_report.title}
                </div>
                <div className="report-block__content">
                  <div className="report-block__description">
                    {product[0].block_report.description}
                  </div>
                  <div className="reports">
                    {product[0].block_report.img.map((item) => (
                      <Image
                        className="reports__item"
                        key={item}
                        alt=""
                        width={216}
                        height={305}
                        src={item}
                      />
                    ))}
                  </div>
                  <div className="primary-button">查看詳細報告</div>
                </div>
              </div>
            </>
          )}
          {product[0].block_info && (
            <div className="info-block section">
              <div className="info-block__left">
                <Sub sub={product[0].block_info.subtitle} />
                <div className="main-title">
                  {product[0].product_name}產品資訊
                </div>
                <ul className="info-block__content">
                  <li>
                    <span className="title">成分</span>
                    {product[0].block_info.element}
                  </li>
                  <li>
                    <span className="title">淨重</span>
                    {product[0].block_info.weight}
                  </li>
                  <li>
                    <span className="title">原產地</span>
                    {product[0].block_info.produce}
                  </li>
                  <li>
                    <span className="title">製作方式</span>
                    {product[0].block_info.made}
                  </li>
                  <li>
                    <span className="title">保存期限</span>
                    {product[0].block_info.limit}
                  </li>
                  <li>
                    <span className="title">保存方式</span>
                    {product[0].block_info.protect}
                  </li>
                </ul>
              </div>
              <Image
                src={product[0].block_info.img}
                width={438}
                height={618}
                alt=""
              />
            </div>
          )}
          {product[0].block_question && (
            <div className="qa-block section">
              <Sub sub={product[0].block_question.subtitle} />
              <div className="main-title">{product[0].product_name} Q&A</div>
              <div className="qa-block__content">
                {product[0].block_question.qa?.map((item, index) => (
                  <div key={item.q} className="qa-block__group">
                    <div className="qa-block__question">
                      <div className="number">Q{index + 1}</div>
                      {item.q}
                    </div>
                    <div className="qa-block__answer">{item.a}</div>
                  </div>
                ))}
                <div className="primary-button">立刻加入購物車</div>
              </div>
            </div>
          )}
        </>
      ) : (
        "找不到"
      )}
    </div>
  );
}
