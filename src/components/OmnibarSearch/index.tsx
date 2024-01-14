import { Tools } from "@/constants";
import { Tool } from "@/types";
import { MenuItem } from "@blueprintjs/core";
import { Classes, ItemRenderer, Omnibar } from "@blueprintjs/select";
import { useRouter } from "next/navigation";
import { createGlobalStyle } from "styled-components";
import { areToolsEqual, filterTool, getToolItemProps } from "./utils";

type OmnibarSearchProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OmnibarGlobalStyle = createGlobalStyle`
  .${Classes.OMNIBAR} {
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 500px;
    width: calc(100vw - 20px);
  }
`;

export default function OmnibarSearch({ isOpen, onClose }: OmnibarSearchProps) {
  const router = useRouter();

  const renderItem: ItemRenderer<Tool> = (item, props) => {
    if (!props.modifiers.matchesPredicate) {
      return null;
    }
    return <MenuItem key={item.name} {...getToolItemProps(item, props)} />;
  };

  const handleItemSelect = (item: Tool) => {
    router.push(item.url);
    onClose();
  };

  return (
    <>
      <OmnibarGlobalStyle />
      <Omnibar<Tool>
        resetOnSelect
        isOpen={isOpen}
        items={Tools}
        itemPredicate={filterTool}
        itemsEqual={areToolsEqual}
        noResults={<MenuItem disabled={true} text="No results." />}
        itemRenderer={renderItem}
        onItemSelect={handleItemSelect}
        onClose={onClose}
      />
    </>
  );
}
