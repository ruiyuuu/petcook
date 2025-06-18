"use client";
import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";

export function FootPrint({ className }) {
  return (
    <Image
      src={
        "https://img.shoplineapp.com/media/image_clips/6831eb99b814f6000f4151b9/original.png?1748102041"
      }
      width={274}
      height={274}
      alt=""
      unoptimized
      className={className}
    />
  );
}

export default function Page({ params }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sessionData = sessionStorage.getItem("id");
    if (!sessionData) {
      router.replace("/");
    } else {
      setAllowed(true);
    }
  }, [router]);

  if (!allowed) return <p>loading..</p>;
  const { id } = React.use(params);
  const product = data
    .filter((item) => item.product_name === decodeURI(id))
    .map((item) => item);

  return (
    <div className="layout">
      {product.length > 0 ? (
        <>
          {product[0].block_intro && (
            <div className="img-content-block section">
              <div className="slogan">{product[0].block_intro.slogan}</div>
              <div className="img-content-block__content">
                <FootPrint className="foot-print left" />
                <FootPrint className="foot-print top" />
                <Image
                  alt=""
                  src={product[0].block_intro.img}
                  width={660}
                  height={462}
                  className="img-content-block__content__img"
                  unoptimized
                />
                <Image
                  alt=""
                  src={product[0].block_intro.img_M}
                  width={660}
                  height={462}
                  className="img-content-block__content__img m"
                  unoptimized
                />
                <div className="img-content-block__content__left">
                  <div className="img-content-block__content__title">
                    {product[0].product_name}
                    <div className="img-content-block__content__subtitle">
                      {product[0].block_intro.subtitle[0]}
                      <span>{product[0].block_intro.subtitle[1]}</span>
                      {product[0].block_intro.subtitle[2]}
                    </div>
                  </div>
                  <div className="img-content-block__content__description">
                    {product[0].block_intro.description}
                  </div>
                </div>
              </div>
            </div>
          )}
          {product[0].block_compare && (
            <div className="table-block section">
              <Sub sub={product[0].block_compare.subtitle} />
              <div className="main-title compare-title">
                {product[0].block_compare.title}
              </div>
              <div className="table-PC">
                <div className="table-PC__header">
                  <span className="th">
                    {product[0].block_compare.headerTH1}
                  </span>
                  <span className="th">
                    {product[0].block_compare.headerTH2}
                  </span>
                </div>
                <div className="table-PC__body">
                  <div className="tr">
                    <span className="td">
                      {product[0].block_compare.bodyTD1_1}
                      {product[0].block_compare.bodyTD1 === "1" && (
                        <>
                          <Image
                            src={
                              "https://img.shoplineapp.com/media/image_clips/6831ee66b48f5b000d223650/original.png?1748102757"
                            }
                            unoptimized
                            width={24}
                            height={24}
                            alt=""
                            className="win"
                          />
                        </>
                      )}
                    </span>
                    <div className="th">飼養方式</div>
                    <span className="td">
                      {product[0].block_compare.bodyTD1_2}
                    </span>
                  </div>
                  <hr className="divide" />
                  <div className="tr">
                    <span className="td">
                      {product[0].block_compare.bodyTD2_1}
                      {product[0].block_compare.bodyTD2 === "1" && (
                        <>
                          <Image
                            src={
                              "https://img.shoplineapp.com/media/image_clips/6831ee66b48f5b000d223650/original.png?1748102757"
                            }
                            unoptimized
                            width={24}
                            height={24}
                            alt=""
                            className="win"
                          />
                        </>
                      )}
                    </span>
                    <div className="th">脂肪含量</div>
                    <span className="td">
                      {product[0].block_compare.bodyTD2_2}
                    </span>
                  </div>
                  <hr className="divide" />
                  <div className="tr">
                    <span className="td">
                      {product[0].block_compare.bodyTD3_1}
                      {product[0].block_compare.bodyTD3 === "1" && (
                        <>
                          <Image
                            src={
                              "https://img.shoplineapp.com/media/image_clips/6831ee66b48f5b000d223650/original.png?1748102757"
                            }
                            unoptimized
                            width={24}
                            height={24}
                            alt=""
                            className="win"
                          />
                        </>
                      )}
                    </span>
                    <div className="th">營養成分</div>
                    <span className="td">
                      {product[0].block_compare.bodyTD3_2}
                    </span>
                  </div>
                  <hr className="divide" />
                  <div className="tr">
                    <span className="td">
                      {product[0].block_compare.bodyTD4_1}
                      {product[0].block_compare.bodyTD4 === "1" && (
                        <>
                          <Image
                            src={
                              "https://img.shoplineapp.com/media/image_clips/6831ee66b48f5b000d223650/original.png?1748102757"
                            }
                            unoptimized
                            width={24}
                            height={24}
                            alt=""
                            className="win"
                          />
                        </>
                      )}
                    </span>
                    <div className="th">肉質風味</div>
                    <span className="td">
                      {product[0].block_compare.bodyTD4_2}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {product[0].block_content_img && (
            <div className="content-img-block section">
              <div className="content-img-block__left">
                <DialogSub
                  sub={product[0].block_content_img.subtitle}
                  title={product[0].block_content_img.title}
                />
                <div className="content-img-block__content">
                  {product[0].block_content_img.description}
                </div>
              </div>
              <div className="content-img-block__right">
                <Image
                  alt=""
                  src={
                    "https://img.shoplineapp.com/media/image_clips/6831e4a628f53e0011788858/original.png?1748100261"
                  }
                  width={554}
                  height={354}
                  className="content-img-block__right__bg"
                  unoptimized
                />
                <Image
                  alt=""
                  src={product[0].block_content_img.img}
                  width={340}
                  height={458}
                  className="content-img-block__right__product"
                  unoptimized
                />
                <div className="footprint-group">
                  <Image
                    src={
                      "https://img.shoplineapp.com/media/image_clips/6831ee658cf534000f45b784/original.png?1748102757"
                    }
                    unoptimized
                    width={74}
                    height={74}
                    alt=""
                    className="foot-print"
                  />
                  <Image
                    src={
                      "https://img.shoplineapp.com/media/image_clips/6831ee658cf534000f45b784/original.png?1748102757"
                    }
                    unoptimized
                    width={74}
                    height={74}
                    alt=""
                    className="foot-print"
                  />
                  <Image
                    src={
                      "https://img.shoplineapp.com/media/image_clips/6831ee658cf534000f45b784/original.png?1748102757"
                    }
                    unoptimized
                    width={74}
                    height={74}
                    alt=""
                    className="foot-print"
                  />
                  <Image
                    src={
                      "https://img.shoplineapp.com/media/image_clips/6831ee658cf534000f45b784/original.png?1748102757"
                    }
                    unoptimized
                    width={74}
                    height={74}
                    alt=""
                    className="foot-print"
                  />
                </div>
              </div>
            </div>
          )}
          {product[0].block_banner && (
            <div className="banner-block section">
              <Sub sub={product[0].block_banner.subtitle} />
              <h2 className="main-title">{product[0].block_banner.title}</h2>
              {product[0].block_banner.description && (
                <p className="banner-block__des">
                  {product[0].block_banner.description}
                </p>
              )}
              {product[0].block_banner.tags && (
                <div className="banner-block__banner">
                  <div className="banner-block__banner__mask">
                    <Image
                      src={product[0].block_banner.img}
                      width={1130}
                      height={622}
                      alt=""
                      className="banner-block__banner__img"
                      unoptimized
                    />
                  </div>
                  <div className="tag-group">
                    {product[0].block_banner.tags?.map((item) => (
                      <div className="tag" key={item}>
                        #{item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {product[0].block_banner.list && (
                <div
                  className="banner-block__listPic"
                  style={
                    product[0].block_banner.list.length === 0
                      ? { justifyContent: "center" }
                      : null
                  }
                >
                  <Image
                    src={product[0].block_banner.img}
                    width={1130}
                    height={622}
                    alt=""
                    className="banner-block__listPic__img"
                    unoptimized
                  />
                  {product[0].block_banner.list.length > 0 && (
                    <ul className="banner_list">
                      {product[0].block_banner.list?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {product[0].block_banner.note && (
                <div className="note">
                  * 食用小提醒：{product[0].block_banner.note}
                </div>
              )}
            </div>
          )}
          {product[0].type && (
            <div className="card-block section">
              <DialogSub
                sub={"酥脆骰子切塊"}
                title={"建議餵食方式與攝取量"}
                position={"center"}
                color={"orange"}
              />
              <div className="card-block__content">
                <div className="card-block__content__item s">
                  <div className="dog-block">
                    {product[0].type === "dog" && (
                      <Image
                        src={
                          "https://img.shoplineapp.com/media/image_clips/6812eefd73fb33000c2beac6/original.png?1746071290"
                        }
                        alt=""
                        width={290}
                        height={290}
                        className="dog"
                        unoptimized
                      />
                    )}
                    {product[0].type === "cat" && (
                      <Image
                        src={
                          "https://img.shoplineapp.com/media/image_clips/6812eefdd3bb21000cb37396/original.png?1746071290"
                        }
                        alt=""
                        width={290}
                        height={290}
                        className="dog"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="card-block__content__text">
                    <div className="title">
                      小型
                      {product[0].type === "dog" && <>犬</>}
                      {product[0].type === "cat" && <>貓</>}
                      {"(<5kg)"}
                    </div>
                    {product[0].block_suggest.s}
                  </div>
                </div>
                <div className="card-block__content__item m">
                  <div className="dog-block">
                    {product[0].type === "dog" && (
                      <Image
                        src={
                          "https://img.shoplineapp.com/media/image_clips/6812eefe0eadc4000b9c20ee/original.png?1746071291"
                        }
                        alt=""
                        width={290}
                        height={290}
                        className="dog"
                        unoptimized
                      />
                    )}
                    {product[0].type === "cat" && (
                      <Image
                        src={
                          "https://img.shoplineapp.com/media/image_clips/6812eefddc120a000ed97f60/original.png?1746071290"
                        }
                        alt=""
                        width={290}
                        height={290}
                        className="dog"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="card-block__content__text">
                    <div className="title">
                      中型{product[0].type === "dog" && <>犬</>}
                      {product[0].type === "cat" && <>貓</>} (5–10kg)
                    </div>
                    {product[0].block_suggest.m}
                  </div>
                </div>
                <div className="card-block__content__item l">
                  <div className="dog-block">
                    {product[0].type === "dog" && (
                      <Image
                        src={
                          "https://img.shoplineapp.com/media/image_clips/6812eefd26a778000cd5ad6a/original.png?1746071290"
                        }
                        alt=""
                        width={290}
                        height={290}
                        className="dog"
                        unoptimized
                      />
                    )}
                    {product[0].type === "cat" && (
                      <Image
                        src={
                          "https://img.shoplineapp.com/media/image_clips/6812eefd87e06f0011bc7757/original.png?1746071290"
                        }
                        alt=""
                        width={290}
                        height={290}
                        className="dog"
                        unoptimized
                      />
                    )}
                  </div>
                  <div className="card-block__content__text">
                    <div className="title">
                      大型{product[0].type === "dog" && <>犬</>}
                      {product[0].type === "cat" && <>貓</>} (10kg 以上)
                    </div>
                    {product[0].block_suggest.l}
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
          {product[0].block_recommend && (
            <div className="dialog-block section">
              <Sub sub={product[0].block_recommend.subtitle} />
              <h2 className="main-title">{product[0].block_recommend.title}</h2>
              <div className="dialog-block__content">
                <div className="dialog-block__content__group">
                  <div className="img-block">
                    <Image
                      src={
                        "https://img.shoplineapp.com/media/image_clips/6812eefc3bddea000b43b5ad/original.png?1746071289"
                      }
                      alt=""
                      width={300}
                      height={300}
                      unoptimized
                    />
                  </div>
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
                  <div className="img-block">
                    <Image
                      src={
                        "https://img.shoplineapp.com/media/image_clips/6812eefc3bddea000c43b53b/original.png?1746071289"
                      }
                      alt=""
                      width={300}
                      height={300}
                      unoptimized
                    />
                  </div>
                </div>
                <div className="dialog-block__content__group">
                  <div className="img-block">
                    <Image
                      src={
                        "https://img.shoplineapp.com/media/image_clips/6812eefc04afac000e2e2691/original.png?1746071289"
                      }
                      alt=""
                      width={300}
                      height={300}
                      unoptimized
                    />
                  </div>
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
                <h2 className="main-title">{product[0].block_report.title}</h2>
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
                        unoptimized
                      />
                    ))}
                  </div>
                  <a
                    href="https://www.petcookco.com/pages/certification"
                    className="primary-button"
                  >
                    查看詳細報告
                  </a>
                </div>
              </div>
            </>
          )}
          {product[0].block_info && (
            <div className="info-block section">
              <Sub sub={product[0].block_info.subtitle} />
              <h2 className="main-title">{product[0].product_name}產品資訊</h2>
              <div className="info-block__des">
                <div className="info-block__left">
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
                      <span className="title">製作方式</span>
                      {product[0].block_info.made}
                    </li>
                    <li>
                      <span className="title">製作產地</span>
                      {product[0].block_info.origin}
                    </li>
                    <li>
                      <span className="title">食材產地</span>
                      {product[0].block_info.produce}
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
                  unoptimized
                />
              </div>
            </div>
          )}
          {product[0].block_question && (
            <div className="qa-block section">
              <Sub sub={product[0].block_question.subtitle} />
              <h2 className="main-title">{product[0].product_name} Q&A</h2>
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
                <a href={product[0].href} className="primary-button">
                  立刻加入購物車
                </a>
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
