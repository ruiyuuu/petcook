import React from "react";
import Image from "next/image";
import Kitchen from "@/public/Kitchen.png";
import Kitchen_M from "@/public/Kitchen_m.png";
import DialogPic from "@/public/Dialog.png";
import Dog from "@/public/Dog.png";
import Cat from "@/public/Cat.png";
import Circles from "@/public/Circles.png";
import Can from "@/public/Can.png";
import ShineBorder from "@/public/shine-border.png";
import ShineOrange from "@/public/shine-orange.png";
import ShineBrown from "@/public/shine-brown.png";
import Wow from "@/public/wow.png";
import Yes from "@/public/yes.png";
import Minus1 from "@/public/+1.png";
import ProductBG1 from "@/public/product-bg.png";
import ProductBG2 from "@/public/product-bg2.png";
import Paw from "@/public/paw.png";
import Popular_PRD from "@/public/人氣商品.png";
import PickyEater_PRD from "@/public/挑嘴貓罐罐.png";
import Nature_PRD from "@/public/nature-food.png";
import Handmade_PRD from "@/public/handmade.png";
import Machine from "@/public/machine.png";
import ISO from "@/public/ISO.png";
import ISO_laptop from "@/public/ISO_laptop.png";
import ISO_M from "@/public/ISO_m.png";
import CatHead from "@/public/CatHead.png";
import Ribbon from "@/public/ribbon.png";
import Bird from "@/public/bird.png";
import SliderCommend from "@/components/SliderCommend";
import Line from "@/public/line.png";
import Balloon from "@/public/balloon.png";
import Lv1 from "@/public/lv1.png";
import Lv1_m from "@/public/lv1_m.png";
import Lv2 from "@/public/lv2.png";
import Lv3 from "@/public/lv3.png";
import Lv4 from "@/public/lv4.png";
import Lv5 from "@/public/lv5.png";
import Lv6 from "@/public/lv6.png";
import Partner1 from "@/public/partner1.png";
import Partner2 from "@/public/partner2.png";
import StepCard from "@/public/step-card.png";
import SlideShop from "@/components/slideShop";

export default function Page() {
  const shops = [
    "包旺家",
    "踏踏地球",
    "mao & kou 寵物用品(水湳店)",
    "mao & kou 寵物用品(勤美店)",
    "牧貓寵物精品旅館",
    "伊狗寵物選品Eeego",
    "酷吉選品Kuji Select",
    "寵曖貓狗生活館",
    "好萌pet sitter",
    "毛宅仔寵物美容",
    "豆哥與凱特寵物用品",
    "HAPET好寵 永康店",
    "HAPET好寵 安森店",
    "球掌世界寵物超市",
    "美好寵物美容",
    "悠遊貓旅",
    "囍八咖啡 ᴘᴇᴛ sʜᴏᴘ.ᴄᴏғғᴇᴇ",
    "點點寵物",
    "蕎逸寵物店",
    "貝果貝果寵物精品旅館",
    "I dog愛逗格寵物美容",
    "帕彼愛逗寵物",
    "汪喵寵物選品",
    "頑皮族寵物生活館-建國店",
    "探狗喵 毛孩選物店 SKM Park Outlets 高雄草衙",
    "集貓舍",
    "乾乾咬一口寵物用品店",
    "佩泊寵物美容",
    "萬達寵物－寵物公園",
    "魚中魚－寵物水族",
    "不是寵物店",
    "Bone Bone 寵物店",
    "金吉利寵物用品店",
    "百分百 - 寵物生活館",
    "HKTV Mall",
    "Three Little Meow 寵物選品",
    "福媽寵物特選店",
    "阿貴養了一隻牛-毛孩選物",
  ];
  const shopsRevers = shops.slice().reverse();
  const step = [
    {
      id: 1,
      title: "訂單確認",
      content: (
        <>
          洽談需求
          <br />
          制定專屬方案
        </>
      ),
      img1: "https://img.shoplineapp.com/media/image_clips/687fa55fec6651000cc1e829/original.png?1753195871",
      img2: "https://img.shoplineapp.com/media/image_clips/687fa55df917f4000e44c000/original.png?1753195868",
    },
    {
      id: 2,
      title: "需求討論",
      content: (
        <>
          產品規劃
          <br />
          提供專業建議
        </>
      ),
      img1: "https://img.shoplineapp.com/media/image_clips/687fa55d95c09f001633977c/original.png?1753195868",
      img2: "https://img.shoplineapp.com/media/image_clips/687fa55d5ba4820010c9361b/original.png?1753195868",
    },
    {
      id: 3,
      title: "生產出貨",
      content: (
        <>
          嚴格品管
          <br />
          確保穩定供應
        </>
      ),
      img1: "https://img.shoplineapp.com/media/image_clips/687fa55d55338b0010fea59e/original.png?1753195868",
      img2: "https://img.shoplineapp.com/media/image_clips/687fa55ba77cf9000ee0ac47/original.png?1753195866",
    },
    {
      id: 4,
      title: "專人聯繫",
      content: (
        <>
          快速對接
          <br />
          全程服務
        </>
      ),
      img1: "https://img.shoplineapp.com/media/image_clips/687fa55de23b180016b606aa/original.png?1753195868",
      img2: "https://img.shoplineapp.com/media/image_clips/687fa55bd32ac300141277cc/original.png?1753195866",
    },
  ];
  return (
    <>
      <div className="comic-border w-100"></div>
      <div className="intro">
        <div className="intro__dialog">
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55baed6ec0016255591/original.png?1753195867"
            }
            width={685}
            height={514}
            alt=""
            className="dialogPic"
            unoptimized
          />
          <div className="intro__dialog__content">
            <div className="intro__dialog__content__title">
              <span className="highlight">派庫</span>
              廚房
            </div>
            <div className="intro__dialog__content__subtitle">
              一間專為毛孩料理的寵物食品廚房
            </div>
            <div className="intro__dialog__content__des">
              在派庫， 我們相信毛孩的食物應該像家人一樣被用心對待。
              <br />
              <br />
              我們選用新鮮肉源，講究食材產地與部位，堅持使用100%原型純肉、無添加的天然食材，
              每一塊凍乾與肉乾都保留原始肉塊的真實樣貌與營養，不混肉、無加工，也不妥協。
            </div>
          </div>
        </div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa572c1dd8a000c6fc958/original.png?1753195887"
          }
          width={1920}
          height={1682}
          alt=""
          className="intro__bg"
          priority
          unoptimized
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa565830a45000c70ff8d/original.png?1753195876"
          }
          width={991}
          height={3345}
          alt=""
          className="intro__bg mobile"
          priority
          unoptimized
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55d528c700018fc8d89/original.png?1753195869"
          }
          width={244}
          height={366}
          alt=""
          className="intro__cat"
          priority
          unoptimized
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55dc2a47100185dcb3e/original.png?1753195869"
          }
          width={262}
          height={443}
          alt=""
          className="intro__dog"
          priority
          unoptimized
        />
        <div className="comic-border rotate"></div>
        <div className="comic-border vertical"></div>
        <div className="source">
          <div className="source__content">
            <div className="source__content__title">看得見的天然寵物食品</div>
            每款產品都清楚標示來源，於台灣製作並通過食品安全認證，
            <br />
            成分單純透明、份量適中，讓你看得見來源，也能安心餵食。
          </div>
          <div className="circles">
            <Image
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa55a268d160018ed350d/original.png?1753195866"
              }
              alt=""
              priority
              unoptimized
              width={450}
              height={121}
              className="circles__bg"
            />
            <div className="circles__text">
              <span>台灣製作</span>
              <span>原型純肉</span>
              <span>無添加</span>
            </div>
          </div>
        </div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa56a0ea831000e741a21/original.png?1753195881"
          }
          alt=""
          priority
          unoptimized
          width={1152}
          height={720}
          className="can"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55a53ab74000c15f562/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={23}
          height={30}
          className="shine border"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b4e7ba40014a85dc7/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={23}
          height={29}
          className="shine orange"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55ae65d7d001017092a/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={23}
          height={30}
          className="shine brown"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55df56bb0001618bc74/original.png?1753195868"
          }
          alt=""
          priority
          unoptimized
          width={384}
          height={225}
          className="wow"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55a1c8dc20010b6494a/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={180}
          height={138}
          className="yes"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55a1c8dc20010b6494a/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={180}
          height={138}
          className="yes two"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55a091e63000e3ade39/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={154}
          height={87}
          className="minus1"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55a091e63000e3ade39/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={154}
          height={87}
          className="minus1 two"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55a091e63000e3ade39/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={154}
          height={87}
          className="minus1 three"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55a53ab74000c15f562/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={23}
          height={29}
          className="shine three"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b4e7ba40014a85dc7/original.png?1753195866"
          }
          alt=""
          priority
          unoptimized
          width={23}
          height={29}
          className="shine two"
        />
        <div className="comic-border w-100 absolute bottom"></div>
      </div>
      <div className="product a">
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55dc56339000e1328d1/original.png?1753195869"
          }
          width={1920}
          height={708}
          alt=""
          className="product-bg"
          priority
          unoptimized
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            className="paw"
            priority
            unoptimized
          />
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            className="paw"
            priority
            unoptimized
          />
        </div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/6886fca543112c000a2e70e1/original.png?1753676962"
          }
          width={268}
          height={141}
          alt=""
          className="popular-prod"
          priority
          unoptimized
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b32d89c0014b3760f/original.png?1753195867"
          }
          width={494}
          height={237}
          alt=""
          className="machine"
          priority
          unoptimized
        />
      </div>
      <div className="product">
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55dee8fd8000aa3bdbd/original.png?1753195869"
          }
          width={1920}
          height={708}
          alt=""
          className="product-bg"
          priority
          unoptimized
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            className="paw"
            priority
            unoptimized
          />
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            className="paw"
            priority
            unoptimized
          />
        </div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55de65d7d00141707c3/original.png?1753195869"
          }
          width={268}
          height={141}
          alt=""
          className="popular-prod"
          priority
          unoptimized
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b32d89c0014b3760f/original.png?1753195867"
          }
          width={494}
          height={237}
          alt=""
          className="machine"
          priority
          unoptimized
        />
      </div>
      <div className="product">
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55dc56339000e1328d1/original.png?1753195869"
          }
          width={1920}
          height={708}
          alt=""
          className="product-bg"
          priority
          unoptimized
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            unoptimized
            className="paw"
          />
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            unoptimized
            className="paw"
          />
        </div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55dd206fa0010796fd4/original.png?1753195869"
          }
          width={268}
          height={141}
          alt=""
          unoptimized
          className="popular-prod"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b32d89c0014b3760f/original.png?1753195867"
          }
          width={494}
          height={237}
          alt=""
          unoptimized
          className="machine"
        />
      </div>
      <div className="product">
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55dee8fd8000aa3bdbd/original.png?1753195869"
          }
          width={1920}
          height={708}
          alt=""
          unoptimized
          className="product-bg"
        />
        <div className="comic-border w-100 absolute bottom"></div>
        <div>
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            unoptimized
            className="paw"
          />
          <Image
            src={
              "https://img.shoplineapp.com/media/image_clips/687fa55a1cbfe400108f1d8a/original.png?1753195866"
            }
            width={116}
            height={152}
            alt=""
            unoptimized
            className="paw"
          />
        </div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55d82f6cc001004e772/original.png?1753195869"
          }
          width={268}
          height={141}
          alt=""
          unoptimized
          className="popular-prod"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b32d89c0014b3760f/original.png?1753195867"
          }
          width={494}
          height={237}
          alt=""
          unoptimized
          className="machine"
        />
      </div>
      <div className="iso">
        <div class="comic-border w-100"></div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa573aed6ec00142552fc/original.png?1753195889"
          }
          width={1920}
          height={1680}
          alt=""
          unoptimized
          className="iso__bg"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa5721c16c200140ddbb0/original.png?1753195887"
          }
          width={768}
          height={1776}
          alt=""
          unoptimized
          className="iso__bg laptop"
        />
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa564cb89020014cc1c5c/original.png?1753195876"
          }
          width={576}
          height={1972}
          alt=""
          unoptimized
          className="iso__bg m"
        />
        <div>
          <div className="comic-border rotate"></div>
          <div className="comic-border rotate"></div>
          <div className="comic-border rotate"></div>
        </div>
        <div className="iso__content">
          <div className="iso__content__title">
            派庫通過 ISO9001 認證
            <br />
            嚴格遵循 HACCP 標準
          </div>
          <div className="iso__content__description">
            毛孩的每一口，
            <br />
            都是經過嚴格把關的安心食材！
          </div>
          <a
            href="https://www.petcookco.com/pages/certification"
            className="primary-button"
          >
            食品合格檢驗
          </a>
        </div>
        <Image
          alt=""
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55d55338b0016fea330/original.png?1753195869"
          }
          width={154}
          height={193}
          unoptimized
          className="cat-head"
        />
        <div className="best-choice">
          <div className="best-choice__title blue">冷凍乾燥是什麼？</div>
          <div className="best-choice__title">
            最適合犬貓的天然寵物食品選擇！
          </div>
          <div className="ribbon">
            <Image
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa55b268d160016ed360c/original.png?1753195867"
              }
              width={33}
              height={75}
              alt=""
              unoptimized
              className="ribbon__foot"
            />
            <div className="ribbon__text">
              100% <br />
              還原食材營養與風味
            </div>
            <Image
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa55b268d160016ed360c/original.png?1753195867"
              }
              width={33}
              height={75}
              alt=""
              unoptimized
              className="ribbon__foot"
            />
          </div>
          <div className="best-choice__description">
            冷凍乾燥（Freeze-Dried Pet Food）
            <br />
            是近年來備受推崇的寵物食品製作技術，透過技術將食材中的水分
            <br />
            直接昇華為氣體消除，有效保留食材的原始風味與營養。
            <br />
            <br />
            無論作為零食凍乾享用，或加水還原新鮮肉品，
            <br />
            都是讓毛孩安心入口的優質零食！
          </div>
        </div>
        <Image
          alt=""
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55bd822bf00168636f5/original.png?1753195867"
          }
          width={134}
          height={150}
          unoptimized
          className="bird"
        />
      </div>
      <div className="commend">
        <div className="commend__title">毛爸毛媽這樣說</div>
        <Image
          alt=""
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b6acd720012b72e1b/original.png?1753195867"
          }
          width={62}
          unoptimized
          height={76}
          className="balloon"
        />
        <Image
          alt=""
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55b6acd720012b72e1b/original.png?1753195867"
          }
          width={62}
          height={76}
          unoptimized
          className="balloon"
        />
        <SliderCommend />
        <Image
          alt=""
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55bd3d923001675c9c0/original.png?1753195867"
          }
          width={1920}
          height={125}
          unoptimized
          className="line"
        />
      </div>
      <div className="member">
        <div className="member__title">派庫 × 會員制</div>
        <div className="member__all">
          <div className="member__all__item">
            <Image
              alt=""
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa55fc4712100128c0f08/original.png?1753195871"
              }
              width={943}
              height={449}
              unoptimized
              className="level"
            />
          </div>
          <div className="member__all__item">
            <Image
              alt=""
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa55fd822bf00188636c3/original.png?1753195871"
              }
              width={943}
              height={449}
              unoptimized
              className="level"
            />
          </div>
          <div className="member__all__item">
            <Image
              alt=""
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa560c563390014132896/original.png?1753195871"
              }
              width={943}
              height={449}
              unoptimized
              className="level"
            />
          </div>
          <div className="member__all__item">
            <Image
              alt=""
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa560ec6651000ec1e7d5/original.png?1753195871"
              }
              width={943}
              height={449}
              unoptimized
              className="level"
            />
          </div>
          <div className="member__all__item">
            <Image
              alt=""
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa560180f9f000c8db866/original.png?1753195871"
              }
              width={943}
              height={449}
              unoptimized
              className="level"
            />
          </div>
          <div className="member__all__item">
            <Image
              alt=""
              src={
                "https://img.shoplineapp.com/media/image_clips/687fa560af3fe500147e4893/original.png?1753195871"
              }
              width={943}
              height={449}
              unoptimized
              className="level"
            />
          </div>
        </div>
        <Image
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa562e137d8000c03c9ef/original.png?1753195873"
          }
          width={696}
          height={1158}
          alt=""
          unoptimized
          className="level mobile"
        />
      </div>
      <div className="partner">
        <div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="partner__content">
            <div className="partner__content__subtitle">
              專業寵物凍乾代工 / 批發服務
            </div>
            <div className="partner__content__title">
              派庫深受廠商信任
              <br />
              業界信賴的寵物食品夥伴
            </div>
            <div className="partner__content__description">
              派庫廚房通過 ISO9001
              <br className="m" /> 且依 HACCP 的標準嚴格控管品質，
              <br />
              以台灣製造、高穩定供應的
              <br className="m" />
              寵物凍乾代工 & 批發服務，
              <br />
              深受不同業者品牌與通路商信賴。
            </div>
          </div>
        </div>
        <Image
          alt=""
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55eec56a10014c0d1c0/original.png?1753195870"
          }
          width={160}
          unoptimized
          height={160}
          className="partner-pic"
        />
        <Image
          alt=""
          src={
            "https://img.shoplineapp.com/media/image_clips/687fa55f1c528b00100fddb2/original.png?1753195871"
          }
          width={255}
          height={160}
          unoptimized
          className="partner-pic"
        />
        <div className="all-partner">
          <div className="all-partner__title">
            我們的通路夥伴
            <a
              href="https://www.petcookco.com/pages/shops"
              className="all-shops"
            >
              查看所有實體通路 ▸
            </a>
          </div>
          <div className="all-partner__items">
            <SlideShop shops={shops} reverseDirection={""} />
          </div>
          <div className="all-partner__items">
            <SlideShop shops={shopsRevers} reverseDirection={"rtl"} />
          </div>
        </div>
        <div>
          <div className="triangle"></div>
        </div>
      </div>
      <div className="comic-border w-100"></div>
      <div className="contact">
        <div className="contact__title">
          <span>四步驟 輕鬆合作</span>
          聯繫派庫
        </div>
        <div className="step">
          {step?.map((item) => (
            <div className="step__card" key={item.title}>
              <Image
                src={
                  "https://img.shoplineapp.com/media/image_clips/687fa55d728644001498483e/original.png?1753195869"
                }
                alt=""
                width={345}
                height={391}
                unoptimized
                className="step__card__bg"
              />
              <Image
                src={item.img1}
                alt=""
                width={344}
                height={344}
                unoptimized
                className="step__card__role"
              />
              <div className="step__card__content">
                <div className="number">{item.id}</div>
                <div className="line"></div>
                <div className="group">
                  <div className="group__title">{item.title}</div>
                  <div className="group__content">{item.content}</div>
                </div>
              </div>
              <Image
                src={item.img2}
                alt=""
                width={344}
                height={344}
                unoptimized
                className="step__card__role2"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
