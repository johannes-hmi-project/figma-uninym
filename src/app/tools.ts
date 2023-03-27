export function isComponentNode(node: BaseNode): node is ComponentNode {
	return node.type === 'COMPONENT';
}

export function isComponentSetNode(node: BaseNode): node is ComponentSetNode {
	return node.type === 'COMPONENT_SET';
}

export function isInstanceNode(node: BaseNode): node is InstanceNode {
	return node.type === 'INSTANCE';
}

export const isComponentSetVariant = (node: BaseNode): node is ComponentNode => {
	if(node.type === 'COMPONENT'){
		if(node.parent){
			if(isComponentSetNode(node.parent)){
				return true;
			}
		}
	}
	
	return false;
}