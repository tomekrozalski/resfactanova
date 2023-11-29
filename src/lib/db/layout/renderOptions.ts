import { BLOCKS } from '@contentful/rich-text-types';
import type { Node, Link } from '@contentful/rich-text-types';

// source: https://www.contentful.com/blog/rendering-linked-assets-entries-in-contentful/

type LinksTypes = {
	entries: { block: Link[] };
	assets: { block: Link[] };
};

const renderOptions = (links: LinksTypes) => {
	const assetMap = new Map();

	for (const asset of links.assets.block) {
		assetMap.set(asset.sys.id, asset);
	}

	const entryMap = new Map();

	for (const entry of links.entries.block) {
		entryMap.set(entry.sys.id, entry);
	}

	return {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: Node, next: unknown) =>
				// @ts-expect-error 500
				`<p>${next(node.content).replace(/\n/g, '<br>')}</p>`,
			[BLOCKS.HEADING_3]: (node: Node, next: unknown) =>
				// @ts-expect-error 500
				`<h3 class="font-serif mb-6 text-xl text-black font-bold">${next(node.content)}</h3>`,
			[BLOCKS.HEADING_4]: (node: Node, next: unknown) =>
				// @ts-expect-error 500
				`<h4 class="my-6 font-serif text-lg font-medium text-black">${next(node.content)}</h4>`,
			[BLOCKS.HR]: () => '<hr class="my-5 border-blue">',
			[BLOCKS.LIST_ITEM]: (node: Node, next: unknown) =>
				// @ts-expect-error 500
				`<li class="list-disc list-inside">
					${next(node.content).replace(/<[^>]p*>/g, '')}
				</li>`,
			[BLOCKS.EMBEDDED_ENTRY]: (node: Node) => {
				const entry = entryMap.get(node.data.target.sys.id);

				if (entry.__typename === 'YouTube') {
					const id = entry.id?.split('/')?.at(-1);

					if (!id) {
						return '';
					}

					return `
            <iframe
							class="w-full aspect-video my-5"
							src="https://www.youtube.com/embed/${id}"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
          `;
				}
			},
			[BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
				const asset = assetMap.get(node.data.target.sys.id);

				return `
					<img
						alt="${asset.description}"
						src="${asset.url}"
						height="${asset.height}px"
						width="${asset.width}px"
					/>
				`;
			}
		}
	};
};

export default renderOptions;
