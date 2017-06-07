<?php

/* /Users/lrodrigues/Projects/murakami/themes/base/partials/site/meta.htm */
class __TwigTemplate_f1bfc041e2e4a5bc1ea354bb5c3bc08363f04c1beaf5726e30ca1ec023d1b9e1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<meta charset=\"utf-8\">
";
        // line 2
        if ($this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "meta_title", array())) {
            // line 3
            echo "    <title>";
            echo call_user_func_array($this->env->getFilter('_')->getCallable(), array($this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "meta_title", array())));
            echo " - ";
            echo call_user_func_array($this->env->getFilter('_')->getCallable(), array($this->getAttribute(($context["site"] ?? null), "name", array())));
            echo "</title>
    <meta name=\"title\" content=\"";
            // line 4
            echo call_user_func_array($this->env->getFilter('_')->getCallable(), array($this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "meta_title", array())));
            echo "\">
";
        } else {
            // line 6
            echo "    <title>";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "title", array()), "html", null, true);
            echo " - ";
            echo call_user_func_array($this->env->getFilter('_')->getCallable(), array($this->getAttribute(($context["site"] ?? null), "name", array())));
            echo "</title>
";
        }
        // line 8
        if ($this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "meta_description", array())) {
            // line 9
            echo "    <meta name=\"description\" content=\"";
            echo call_user_func_array($this->env->getFilter('_')->getCallable(), array($this->getAttribute($this->getAttribute(($context["this"] ?? null), "page", array()), "meta_description", array())));
            echo "\">
";
        }
        // line 11
        echo "<meta name=\"author\" content=\"Leandro Rodrigues\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
<meta name=\"generator\" content=\"OctoberCMS\">
<link rel=\"icon\" type=\"image/png\" href=\"";
        // line 14
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/october.png");
        echo "\" />
";
        // line 15
        echo $this->env->getExtension('CMS')->assetsFunction('css');
        echo $this->env->getExtension('CMS')->displayBlock('styles');
        // line 16
        echo "<link href=\"";
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter(array(0 => "assets/build/bundle-style.css"));
        // line 18
        echo "\" rel=\"stylesheet\">";
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/meta.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 18,  64 => 16,  61 => 15,  57 => 14,  52 => 11,  46 => 9,  44 => 8,  36 => 6,  31 => 4,  24 => 3,  22 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<meta charset=\"utf-8\">
{% if this.page.meta_title %}
    <title>{{ this.page.meta_title|_ }} - {{ site.name|_ }}</title>
    <meta name=\"title\" content=\"{{ this.page.meta_title|_ }}\">
{% else %}
    <title>{{ this.page.title }} - {{ site.name|_ }}</title>
{% endif %}
{% if this.page.meta_description %}
    <meta name=\"description\" content=\"{{ this.page.meta_description|_ }}\">
{% endif %}
<meta name=\"author\" content=\"Leandro Rodrigues\">
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
<meta name=\"generator\" content=\"OctoberCMS\">
<link rel=\"icon\" type=\"image/png\" href=\"{{ 'assets/images/october.png'|theme }}\" />
{% styles %}
<link href=\"{{ [
    'assets/build/bundle-style.css'
]|theme }}\" rel=\"stylesheet\">", "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/meta.htm", "");
    }
}
