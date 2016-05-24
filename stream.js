var question_two = $('.Q2');
		$(question_two).addClass('current_question');
		$(question_two).find('.answer-tag').addClass('active');
		var current_question = $('.question').hasClass('current_question');

		var q2_question_number = $('.Q2').find('.q-number').text();
		var q2_question_text = $('.Q2').find('.question-text').text();

		$('.question-field').attr('placeholder',q2_question_text);
		$('.fill').html(q2_question_number);
	

		$('.save').click(function() {
			alert('Saved!');
		})

		var stream_height = $('.stream').offset().top;
		var answer_tag_offset = $('.current_question').offset().top;
		var a_offset = $('.current_question .answer-wrap:nth-of-type(1)').offset().top;
		var b_offset = $('.current_question .answer-wrap:nth-of-type(2)').offset().top;			
		var a_adjusted = answer_tag_offset - a_offset - 17
		var b_adjusted = answer_tag_offset - b_offset - 17
		var hl1_top = (answer_tag_offset - stream_height) - a_adjusted
			var hl2_top = (answer_tag_offset - stream_height) - b_adjusted


		console.log('stream offset: '+stream_height+'. current question offset: '+answer_tag_offset+'.');

		$('.hl1').css({
			'top': (answer_tag_offset - stream_height) - a_adjusted
		})
		$('.hl2').css({
			'top': (answer_tag_offset - stream_height) - b_adjusted
		})
		$('.v1').css({
			'top': (answer_tag_offset - stream_height) - a_adjusted
		})
		$('.v2').css({
			'top': (answer_tag_offset - stream_height) - b_adjusted
		})


		$('.item').click(function(){
			var active_question = $(this);
			var active_question_number = $(this).find('.q-number').text();
			var active_question_text = $(this).find('.question-text').text();
			// var active_answer_a = $(this).find('.answer-wrap:nth-child(0)>.answer').text();
			
			$(this).addClass('current_question');
			$(this).find('.answer-tag').addClass('active');

			$('.item').not(this)
				.removeClass('current_question')
				.find('.answer-tag').removeClass('active');

			var a_destination_class = $('.current_question .answer-wrap:nth-of-type(1) .destination_tag').text();
			console.log('A dest class: ' + a_destination_class)
			var a_destination_top = $('.'+a_destination_class+'').offset().top;
			console.log('A dest top is ' + a_destination_top)

			var b_destination_class = $('.current_question .answer-wrap:nth-of-type(2) .destination_tag').text();
			console.log('B dest class: ' + b_destination_class)
			var b_destination_top = $('.'+ b_destination_class + '').offset().top;
			console.log('B dest top is ' + b_destination_top)


			$('.question-field').attr('placeholder',active_question_text);
			$('.fill').html(active_question_number);

			var stream_height = $('.stream').offset().top;
			var answer_tag_offset = $('.current_question').offset().top;
			var a_offset = $('.current_question .answer-wrap:nth-of-type(1)').offset().top;
			var b_offset = $('.current_question .answer-wrap:nth-of-type(2)').offset().top;			
			var a_adjusted = answer_tag_offset - a_offset - 17
			var b_adjusted = answer_tag_offset - b_offset - 17
			var hl1_top = (answer_tag_offset - stream_height) - a_adjusted
			var hl2_top = (answer_tag_offset - stream_height) - b_adjusted


			console.log('stream offset: '+stream_height+'. HL1 top: '+hl1_top+'.');

			$('.hl1').css({
				'top': hl1_top
			})
			$('.hl2').css({
				'top': hl2_top
			})
			$('.v1').css({
				'top': (answer_tag_offset - stream_height) - a_adjusted,
				'min-height': a_destination_top - hl1_top
			})
			$('.v2').css({
				'top': (answer_tag_offset - stream_height) - b_adjusted,
				'min-height': b_destination_top - hl2_top
			})
			
		})