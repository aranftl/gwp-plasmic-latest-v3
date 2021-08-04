// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x8ztdr6NwjtFcF6gdhDwfr
// Component: yL-tGJImrp
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import RwButton from "../../RwButton"; // plasmic-import: ZtlGG_EjHW/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: b0t-W0BM_nt_/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_new_figma_test.module.css"; // plasmic-import: x8ztdr6NwjtFcF6gdhDwfr/projectcss
import * as sty from "./PlasmicProductHero.module.css"; // plasmic-import: yL-tGJImrp/css

export type PlasmicProductHero__VariantMembers = {};

export type PlasmicProductHero__VariantsArgs = {};
type VariantPropType = keyof PlasmicProductHero__VariantsArgs;
export const PlasmicProductHero__VariantProps = new Array<VariantPropType>();

export type PlasmicProductHero__ArgsType = {};
type ArgPropType = keyof PlasmicProductHero__ArgsType;
export const PlasmicProductHero__ArgProps = new Array<ArgPropType>();

export type PlasmicProductHero__OverridesType = {
  root?: p.Flex<"div">;
  productHero?: p.Flex<"div">;
  headSubCta?: p.Flex<"div">;
  headSub?: p.Flex<"div">;
  content?: p.Flex<"div">;
  eyebrow?: p.Flex<"h2">;
  headline?: p.Flex<"h1">;
  subhead?: p.Flex<"div">;
  rwButton?: p.Flex<typeof RwButton>;
  heroImage?: p.Flex<"div">;
  videoBg?: p.Flex<"div">;
  backgroundImage?: p.Flex<"div">;
  productCut22?: p.Flex<"div">;
  img?: p.Flex<"img">;
  playLink?: p.Flex<"div">;
};

export interface DefaultProductHeroProps {
  className?: string;
}

function PlasmicProductHero__RenderFunc(props: {
  variants: PlasmicProductHero__VariantsArgs;
  args: PlasmicProductHero__ArgsType;
  overrides: PlasmicProductHero__OverridesType;
  dataFetches?: PlasmicProductHero__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"productHero"}
        data-plasmic-override={overrides.productHero}
        className={classNames(defaultcss.all, sty.productHero)}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"headSubCta"}
          data-plasmic-override={overrides.headSubCta}
          hasGap={true}
          className={classNames(defaultcss.all, sty.headSubCta)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"headSub"}
            data-plasmic-override={overrides.headSub}
            hasGap={true}
            className={classNames(defaultcss.all, sty.headSub)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"content"}
              data-plasmic-override={overrides.content}
              hasGap={true}
              className={classNames(defaultcss.all, sty.content)}
            >
              <h2
                data-plasmic-name={"eyebrow"}
                data-plasmic-override={overrides.eyebrow}
                className={classNames(
                  defaultcss.h2,
                  defaultcss.__wab_text,
                  sty.eyebrow
                )}
              >
                {"All-in-one"}
              </h2>

              <h1
                data-plasmic-name={"headline"}
                data-plasmic-override={overrides.headline}
                className={classNames(
                  defaultcss.h1,
                  defaultcss.__wab_text,
                  sty.headline
                )}
              >
                {"accounting"}
              </h1>

              <div
                data-plasmic-name={"subhead"}
                data-plasmic-override={overrides.subhead}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.subhead
                )}
              >
                {
                  "Easily track income, expenses, and more with accounting software designed for all kinds of businesses. "
                }
              </div>

              <RwButton
                data-plasmic-name={"rwButton"}
                data-plasmic-override={overrides.rwButton}
                className={classNames("__wab_instance", sty.rwButton)}
                large={"large" as const}
              />
            </p.Stack>
          </p.Stack>
        </p.Stack>

        <div
          data-plasmic-name={"heroImage"}
          data-plasmic-override={overrides.heroImage}
          className={classNames(defaultcss.all, sty.heroImage)}
        >
          <div className={classNames(defaultcss.all, sty.freeBox___27MOo)} />

          <p.Stack
            as={"div"}
            data-plasmic-name={"videoBg"}
            data-plasmic-override={overrides.videoBg}
            hasGap={true}
            className={classNames(defaultcss.all, sty.videoBg)}
          >
            <div
              data-plasmic-name={"backgroundImage"}
              data-plasmic-override={overrides.backgroundImage}
              className={classNames(defaultcss.all, sty.backgroundImage)}
            >
              <div
                data-plasmic-name={"productCut22"}
                data-plasmic-override={overrides.productCut22}
                className={classNames(defaultcss.all, sty.productCut22)}
              />

              <img
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(defaultcss.img, sty.img)}
                role={"img"}
                src={"/plasmic/new_figma_test/images/playIcon2.svg"}
              />

              <div
                data-plasmic-name={"playLink"}
                data-plasmic-override={overrides.playLink}
                className={classNames(defaultcss.all, sty.playLink)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__zFd5F
                  )}
                >
                  {"See how it works (1:31)"}
                </div>
              </div>
            </div>
          </p.Stack>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "productHero",
    "headSubCta",
    "headSub",
    "content",
    "eyebrow",
    "headline",
    "subhead",
    "rwButton",
    "heroImage",
    "videoBg",
    "backgroundImage",
    "productCut22",
    "img",
    "playLink"
  ],
  productHero: [
    "productHero",
    "headSubCta",
    "headSub",
    "content",
    "eyebrow",
    "headline",
    "subhead",
    "rwButton",
    "heroImage",
    "videoBg",
    "backgroundImage",
    "productCut22",
    "img",
    "playLink"
  ],
  headSubCta: [
    "headSubCta",
    "headSub",
    "content",
    "eyebrow",
    "headline",
    "subhead",
    "rwButton"
  ],
  headSub: ["headSub", "content", "eyebrow", "headline", "subhead", "rwButton"],
  content: ["content", "eyebrow", "headline", "subhead", "rwButton"],
  eyebrow: ["eyebrow"],
  headline: ["headline"],
  subhead: ["subhead"],
  rwButton: ["rwButton"],
  heroImage: [
    "heroImage",
    "videoBg",
    "backgroundImage",
    "productCut22",
    "img",
    "playLink"
  ],
  videoBg: ["videoBg", "backgroundImage", "productCut22", "img", "playLink"],
  backgroundImage: ["backgroundImage", "productCut22", "img", "playLink"],
  productCut22: ["productCut22"],
  img: ["img"],
  playLink: ["playLink"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  productHero: "div";
  headSubCta: "div";
  headSub: "div";
  content: "div";
  eyebrow: "h2";
  headline: "h1";
  subhead: "div";
  rwButton: typeof RwButton;
  heroImage: "div";
  videoBg: "div";
  backgroundImage: "div";
  productCut22: "div";
  img: "img";
  playLink: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductHero__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductHero__VariantsArgs;
    args?: PlasmicProductHero__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicProductHero__Fetches;
  } & Omit<PlasmicProductHero__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductHero__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicProductHero__ArgProps,
      internalVariantPropNames: PlasmicProductHero__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicProductHero__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductHero";
  } else {
    func.displayName = `PlasmicProductHero.${nodeName}`;
  }
  return func;
}

export const PlasmicProductHero = Object.assign(
  // Top-level PlasmicProductHero renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    productHero: makeNodeComponent("productHero"),
    headSubCta: makeNodeComponent("headSubCta"),
    headSub: makeNodeComponent("headSub"),
    content: makeNodeComponent("content"),
    eyebrow: makeNodeComponent("eyebrow"),
    headline: makeNodeComponent("headline"),
    subhead: makeNodeComponent("subhead"),
    rwButton: makeNodeComponent("rwButton"),
    heroImage: makeNodeComponent("heroImage"),
    videoBg: makeNodeComponent("videoBg"),
    backgroundImage: makeNodeComponent("backgroundImage"),
    productCut22: makeNodeComponent("productCut22"),
    img: makeNodeComponent("img"),
    playLink: makeNodeComponent("playLink"),

    // Metadata about props expected for PlasmicProductHero
    internalVariantProps: PlasmicProductHero__VariantProps,
    internalArgProps: PlasmicProductHero__ArgProps
  }
);

export default PlasmicProductHero;
/* prettier-ignore-end */
