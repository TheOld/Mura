<?php

/* /Users/lrodrigues/Projects/murakami/themes/base/layouts/default.htm */
class __TwigTemplate_0ac0c23053a72e7a0ce9983ee62804c6475383b2a53cac33da59eebc73333b4b extends Twig_Template
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
        echo "<!DOCTYPE html>
<html>
    <head>
        ";
        // line 5
        echo "        ";
        $context['__cms_component_params'] = [];
        echo $this->env->getExtension('CMS')->componentFunction("SeoCmsPage"        , $context['__cms_component_params']        );
        unset($context['__cms_component_params']);
        // line 6
        echo "        ";
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('CMS')->partialFunction("site/styles"        , $context['__cms_partial_params']        );
        unset($context['__cms_partial_params']);
        // line 7
        echo "    </head>
    <body>
        <!-- Header -->
        <header id=\"layout-header\">
            ";
        // line 11
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('CMS')->partialFunction("site/subnav"        , $context['__cms_partial_params']        );
        unset($context['__cms_partial_params']);
        // line 12
        echo "            <div class=\"container\">
                <div class=\"row\">   
                    <div class=\"col-xs-12\">
                        <a href=\"/\" class=\"logo\">
                            <img src=\"";
        // line 16
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/img/logo.png");
        echo "\" alt=\"\">
                        </a>
                    </div>
                    <div class=\"col-xs-12\">
                        ";
        // line 20
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('CMS')->partialFunction("site/nav"        , $context['__cms_partial_params']        );
        unset($context['__cms_partial_params']);
        // line 21
        echo "                    </div>
                </div>
            </div>
        </header>

        <!-- Nav -->
        

        <!-- Content -->
        <section id=\"layout-content\">
            ";
        // line 31
        echo $this->env->getExtension('CMS')->pageFunction();
        // line 32
        echo "        </section>

        <!-- Scripts -->
        ";
        // line 35
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('CMS')->partialFunction("site/scripts"        , $context['__cms_partial_params']        );
        unset($context['__cms_partial_params']);
        // line 36
        echo "
    </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/themes/base/layouts/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  84 => 36,  80 => 35,  75 => 32,  73 => 31,  61 => 21,  57 => 20,  50 => 16,  44 => 12,  40 => 11,  34 => 7,  29 => 6,  24 => 5,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<!DOCTYPE html>
<html>
    <head>
        {#{% partial 'site/meta' %}#}
        {% component 'SeoCmsPage' %}
        {% partial 'site/styles' %}
    </head>
    <body>
        <!-- Header -->
        <header id=\"layout-header\">
            {% partial 'site/subnav' %}
            <div class=\"container\">
                <div class=\"row\">   
                    <div class=\"col-xs-12\">
                        <a href=\"/\" class=\"logo\">
                            <img src=\"{{ 'assets/img/logo.png'|theme }}\" alt=\"\">
                        </a>
                    </div>
                    <div class=\"col-xs-12\">
                        {% partial 'site/nav' %}
                    </div>
                </div>
            </div>
        </header>

        <!-- Nav -->
        

        <!-- Content -->
        <section id=\"layout-content\">
            {% page %}
        </section>

        <!-- Scripts -->
        {% partial 'site/scripts' %}

    </body>
</html>", "/Users/lrodrigues/Projects/murakami/themes/base/layouts/default.htm", "");
    }
}
