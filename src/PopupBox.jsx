const PopupBox = ({ item, setItem }) => {
	//console.log(item);
	const url = item?.urls?.regular;
	return (
		<div className='lightbox show'>
			<div className='wrapper'>
				<header>
					<div className='details'>
						<i className='uil uil-camera'></i>
						<span>Image Preview</span>
					</div>
					<div className='buttons' onClick={() => setItem(null)}>
						<i className='close-icon uil uil-times'></i>
					</div>
				</header>
				<div className='preview-img'>
					<div className='img'>
						<img src={url} alt='preview-img' />
					</div>
				</div>
			</div>
		</div>
	);
};
export default PopupBox;
