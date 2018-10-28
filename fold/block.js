const { __ } = wp.i18n;
const { RichText } = wp.editor;
import FoldEdit from './edit';

wp.blocks.registerBlockType( 'gutenbricks/fold', {
	title: __( 'Fold' ),
	icon: 'sort',
	category: 'layout',
	keywords: [ __( 'faq' ), __( 'question' ), __( 'quiz' ) ],
	supports: { anchor: true },
	attributes: {
		title: {
			source: 'html',
			selector: 'label',
			type: 'string',
		},
		reveal: {
			source: 'html',
			selector: '.gutenbricks-fold-reveal',
			multiline: 'p',
			default: '',
		},
		id: {
			type: 'string',
		},
	},
	edit: FoldEdit,
	save: ( { attributes: { title, reveal, id } } ) => (
		<div className="gutenbricks-fold">
			<input id={ id } type="checkbox" />
			<label htmlFor={ id }>{ title }</label>
			<div className="gutenbricks-fold-reveal">
				<RichText.Content
					multiline
					value={ reveal }
				/>
			</div>
		</div>
	)
} );
