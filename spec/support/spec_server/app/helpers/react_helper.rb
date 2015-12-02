module ReactHelper
  def render_component
    javascript_include_tag 'app.js'
    node = "document.getElementById('react-app')"

    "
      <span id='react-app'/>
      <script>
        window.app(#{node})
      </script>
    ".html_safe
  end
end