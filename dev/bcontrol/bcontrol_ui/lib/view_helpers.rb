module ViewHelpers
  
  def body_class
    request.path.split("/")[1]
  end

  def js_void
    "javascript:void(0)"
  end

  # TODO: remove
  # def table_row(text, colspan: 5)
  #   haml_tag(:tr) do
  #     haml_tag(:td, colspan: colspan) do
  #       haml_concat text
  #     end
  #   end
  # end

  def content_for(key, &block)
    if block
      @content_for ||= {}
      @content_for[key] = yield
    else
      @content_for && @content_for[key]
    end
  end

end
