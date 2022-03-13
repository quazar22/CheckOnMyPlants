// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: g4U16ChXxiyY9kzMDaGd3y
// Component: OlsJy9nRtl
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_check_on_my_plants.module.css"; // plasmic-import: g4U16ChXxiyY9kzMDaGd3y/projectcss
import sty from "./PlasmicWateringHistoryRow.module.css"; // plasmic-import: OlsJy9nRtl/css

import EllipsessvgIcon from "./icons/PlasmicIcon__Ellipsessvg"; // plasmic-import: 8pQ2njHnaW/icon

export type PlasmicWateringHistoryRow__VariantMembers = {};

export type PlasmicWateringHistoryRow__VariantsArgs = {};
type VariantPropType = keyof PlasmicWateringHistoryRow__VariantsArgs;
export const PlasmicWateringHistoryRow__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWateringHistoryRow__ArgsType = {
  date?: React.ReactNode;
  onTime?: React.ReactNode;
};

type ArgPropType = keyof PlasmicWateringHistoryRow__ArgsType;
export const PlasmicWateringHistoryRow__ArgProps = new Array<ArgPropType>(
  "date",
  "onTime"
);

export type PlasmicWateringHistoryRow__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultWateringHistoryRowProps {
  date?: React.ReactNode;
  onTime?: React.ReactNode;
  className?: string;
}

function PlasmicWateringHistoryRow__RenderFunc(props: {
  variants: PlasmicWateringHistoryRow__VariantsArgs;
  args: PlasmicWateringHistoryRow__ArgsType;
  overrides: PlasmicWateringHistoryRow__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.column__zODjY)}>
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "26 February 2022",
            value: args.date,
            className: classNames(sty.slotTargetDate)
          })}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.column__v1FZv)}>
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(projectcss.all, sty.text)}
        >
          {p.renderPlasmicSlot({
            defaultContents: "On Time",
            value: args.onTime,
            className: classNames(sty.slotTargetOnTime)
          })}
        </div>
      </div>

      <div className={classNames(projectcss.all, sty.column__jecBq)}>
        <EllipsessvgIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text", "svg"],
  freeBox: ["freeBox"],
  text: ["text"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWateringHistoryRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWateringHistoryRow__VariantsArgs;
    args?: PlasmicWateringHistoryRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWateringHistoryRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWateringHistoryRow__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicWateringHistoryRow__ArgProps,
      internalVariantPropNames: PlasmicWateringHistoryRow__VariantProps
    });

    return PlasmicWateringHistoryRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWateringHistoryRow";
  } else {
    func.displayName = `PlasmicWateringHistoryRow.${nodeName}`;
  }
  return func;
}

export const PlasmicWateringHistoryRow = Object.assign(
  // Top-level PlasmicWateringHistoryRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicWateringHistoryRow
    internalVariantProps: PlasmicWateringHistoryRow__VariantProps,
    internalArgProps: PlasmicWateringHistoryRow__ArgProps
  }
);

export default PlasmicWateringHistoryRow;
/* prettier-ignore-end */