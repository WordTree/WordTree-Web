import type { VNode, VNodeTypes, VNodeChild } from 'vue';
declare type Children = VNodeTypes[] | VNodeTypes;
export declare const SCOPE = "VNode";
export declare enum PatchFlags {
    TEXT = 1,
    CLASS = 2,
    STYLE = 4,
    PROPS = 8,
    FULL_PROPS = 16,
    HYDRATE_EVENTS = 32,
    STABLE_FRAGMENT = 64,
    KEYED_FRAGMENT = 128,
    UNKEYED_FRAGMENT = 256,
    NEED_PATCH = 512,
    DYNAMIC_SLOTS = 1024,
    HOISTED = -1,
    BAIL = -2
}
export declare const isFragment: (node: unknown) => node is VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare const isText: (node: VNodeChild) => boolean;
export declare const isComment: (node: VNodeChild) => boolean;
export declare const isTemplate: (node: VNodeChild) => boolean;
/**
 * get a valid child node (not fragment nor comment)
 * @param node {VNode} node to be searched
 * @param depth {number} depth to be searched
 */
declare function getChildren(node: VNode, depth: number): undefined | VNode;
/**
 * determine if the element is a valid element type rather than fragments and comment e.g. <template> v-if
 * @param node {VNode} node to be tested
 */
export declare const isValidElementNode: (node: unknown) => node is VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare const getFirstValidNode: (nodes: VNodeChild, maxDepth?: number) => ReturnType<typeof getChildren>;
export declare function renderIf(condition: boolean, node: VNodeTypes, props: any, children?: Children, patchFlag?: number, patchProps?: string[]): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export declare function renderBlock(node: VNodeTypes, props: any, children?: Children, patchFlag?: number, patchProps?: string[]): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
/**
 * todo
 * get normalized props from VNode
 * @param node
 */
export declare const getNormalizedProps: (node: VNode) => any;
export {};
