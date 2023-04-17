/**
 * WordPress components that create the necessary UI elements for the block
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-components/
 */
import { TextControl } from '@wordpress/components';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, ColorPalette, InspectorControls } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props , { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<BlockControls>
			<AlignmentToolbar
  				value={props.attributes.alignment ?? 'none'}
  				onChange={(newAlignment) =>
    			props.setAttributes({ alignment: newAlignment })} 																
			/>
			</BlockControls>
			<InspectorControls key="controls">
				<label>
					Background: <ColorPalette onChange={(newColor) => props.setAttributes({
						bg_color: newColor === undefined ? "#fff" : newColor,
					})}/>
				</label>
				<label>
					Foreground: <ColorPalette onChange={(newColor) => props.setAttributes({
						for_color: newColor === undefined ? "#fff" : newColor,
					})}/>
				</label>
			</InspectorControls>
			<RichText	
				className='form-control'
				style={{ textAlign: props.attributes.alignment , backgroundColor: props.attributes.bg_color, color: props.attributes.for_color}}
				tagName='p'			
				value={ props.attributes.message }
				onChange={ ( val ) => setAttributes( { message: val } ) }
			/>
		</div>
	);
}
