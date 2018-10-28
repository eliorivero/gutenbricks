const { __ } = wp.i18n;
const { RichText } = wp.editor;
const { Button } = wp.components;
const { Component } = wp.element;
const { createBlock } = wp.blocks;

class FoldEdit extends Component {

	constructor( ...args ) {
		super( ...args );
		this.props.setAttributes( { id: `gutenbricks-${ this.props.clientId }` } );
    }

    onChangeTitle( title ) {
		this.props.setAttributes( { title } );
	}

    onChangeReveal( reveal ) {
		this.props.setAttributes( { reveal } );
	}

    addNewFold() {
		this.props.insertBlocksAfter( [ createBlock( 'gutenbricks/fold' ) ] );
	}

	render() {
		const { attributes, className, isSelected } = this.props;
		return (
			<div className={ className + ( isSelected ? ' edit' : '' ) }>
				<RichText
					tagName="label"
					placeholder={ __( 'Write visible text…' ) }
					value={ attributes.title }
					onChange={ this.onChangeTitle }
					/>
				{
					isSelected && [
						<div className="gutenbricks-fold-reveal">
							<RichText
								multiline
								placeholder={ __( 'And the text to reveal…' ) }
								value={ attributes.reveal }
								onChange={ this.onChangeReveal }
							/>
						</div>,
						<Button
							className="button"
							onClick={ this.addNewFold }
						>{ __( 'Add new' ) }</Button>
					]
				}
			</div>
		);
	}
}

export default FoldEdit;
