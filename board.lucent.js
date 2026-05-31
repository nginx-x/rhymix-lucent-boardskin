jQuery(function($) {
	// delete the border for the last row
	$('.board_list tr:last-child>td').css('border','0');
	// hide last tag
	$('.read_footer .tags span:last-child').hide();
	// search box is shown by default (no toggle) — see board.lucent.css
	// user input text blur/focus/change
	var iText = $('.item .iLabel').next('.iText');
	$('.item .iLabel').css('position','absolute');
	iText
		.focus(function() {
			$(this).prev('.iLabel').css('visibility','hidden');
		})
		.blur(function() {
			if(!$(this).val()) {
				$(this).prev('.iLabel').css('visibility','visible');
			} else {
				$(this).prev('.iLabel').css('visibility','hidden');
			}
		})
		.change(function() {
			if(!$(this).val()) {
				$(this).prev('.iLabel').css('visibility','visible');
			} else {
				$(this).prev('.iLabel').css('visibility','hidden');
			}
		})
		.blur();
	// add class to the parent category 
	$('.cTab>li>ul>li.on_').parents('li:first').addClass('on');
	// delete the margin-top for the first child of the ccomments
	$('.feedback .xe_content>*:first-child').css('margin-top','0');

	// Inline comment reply form toggle
	$('.feedback').on('click', '.reply-btn', function(e) {
		e.preventDefault();
		
		var $btn = $(this);
		var $item = $btn.closest('.fbItem');
		var commentSrl = $item.attr('id').replace('comment_', '');
		var $form = $('#write_comment');
		var $placeholder = $('#comment_write_placeholder');
		
		if ($form.length && $placeholder.length) {
			// Set parent_srl hidden input
			var $parentSrlInput = $form.find('input[name="parent_srl"]');
			if (!$parentSrlInput.length) {
				$parentSrlInput = $('<input type="hidden" name="parent_srl" />').appendTo($form);
			}
			$parentSrlInput.val(commentSrl);
			
			// Clear comment_srl to make sure it's a new reply, not an edit
			$form.find('input[name="comment_srl"]').val('');
			
			// Move form right below the footer of the clicked comment
			$form.insertAfter($item.find('.comment_footer'));
			
			// Show cancel button
			$form.find('.cancel-reply-btn').show();
			
			// Smooth scroll to the form
			$('html, body').animate({
				scrollTop: $form.offset().top - 100
			}, 300);
			
			// Focus editor if possible (depending on standard Rhymix editor, but triggering focus on textareas inside)
			$form.find('textarea').first().focus();
		}
	});

	// Cancel reply form and restore to original position
	$('.feedback').on('click', '.cancel-reply-btn', function(e) {
		e.preventDefault();
		
		var $form = $('#write_comment');
		var $placeholder = $('#comment_write_placeholder');
		
		if ($form.length && $placeholder.length) {
			// Clear parent_srl
			$form.find('input[name="parent_srl"]').val('');
			
			// Hide cancel button
			$form.find('.cancel-reply-btn').hide();
			
			// Restore form to its placeholder
			$form.insertAfter($placeholder);
		}
	});

	// Custom select dropdowns
	$('.lucent-select').each(function() {
		var $select = $(this);
		var $trigger = $select.find('.lucent-select-trigger');
		var $options = $select.find('.lucent-select-options');
		var $hiddenInput = $select.find('input[type="hidden"]');
		var $label = $select.find('.lucent-select-label');

		$trigger.on('click', function(e) {
			e.stopPropagation();
			$('.lucent-select').not($select).removeClass('is-open');
			$select.toggleClass('is-open');
		});

		$options.on('click', 'li', function(e) {
			var val = $(this).data('value');
			var txt = $(this).text();
			
			$hiddenInput.val(val);
			$label.text(txt);
			
			$options.find('li').removeClass('is-selected');
			$(this).addClass('is-selected');
			
			$select.removeClass('is-open');
		});
	});

	$(document).on('click', function() {
		$('.lucent-select').removeClass('is-open');
	});
});

// SNS post
(function($) {
	$.fn.snspost = function(opts) {
		var loc = '';
		opts = $.extend({}, {type:'twitter', event:'click', content:''}, opts);
		opts.content = encodeURIComponent(opts.content);
		switch(opts.type) {
			case 'facebook':
				loc = 'http://www.facebook.com/share.php?t='+opts.content+'&u='+encodeURIComponent(opts.url||location.href);
				break;
			case 'delicious':
				loc = 'http://www.delicious.com/save?v=5&noui&jump=close&url='+encodeURIComponent(opts.url||location.href)+'&title='+opts.content;
				break;
			case 'twitter':
				loc = 'http://twitter.com/home?status='+opts.content;
				break;
		}
		this.bind(opts.event, function() {
			window.open(loc);
			return false;
		});
	};
	$.snspost = function(selectors, action) {
		$.each(selectors, function(key,val) {
			$(val).snspost( $.extend({}, action, {type:key}) );
		});
	};
})(jQuery);
