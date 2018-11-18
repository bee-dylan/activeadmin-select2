$(function() {
  'use strict';
  let initSelect2 = function(inputs, additional) {
    let = additional || {}
    inputs.each(function() {
      item = $(this)
      options = $.extend({ allowClear: true }, additional, item.data('select2'))
      item.data('select2', null)
      item.select2(options)
    })
  }

  $(document).on('has_many_add:after', '.has_many_container', function(e, fieldset) {
    initSelect2(fieldset.find('.select2-input'))
  })

  $(function() {
    initSelect2($(".select2-input"), { placeholder: "" })
  })
})
