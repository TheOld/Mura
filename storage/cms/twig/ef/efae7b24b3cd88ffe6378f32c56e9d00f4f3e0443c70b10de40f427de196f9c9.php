<?php

/* /Users/lrodrigues/Projects/murakami/themes/base/partials/site/scripts.htm */
class __TwigTemplate_0eb108580f5a243273a0c89c9b065826172c10906228f37e91e6b9142f11c10b extends Twig_Template
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
        echo "<script src=\"";
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter(array(0 => "assets/js/jquery.js", 1 => "assets/build/bundle-index.js"));
        // line 4
        echo "\"></script>
";
        // line 5
        echo '<script src="'. Request::getBasePath()
                .'/modules/system/assets/js/framework.js"></script>'.PHP_EOL;
        echo '<script src="'. Request::getBasePath()
                    .'/modules/system/assets/js/framework.extras.js"></script>'.PHP_EOL;
        echo '<link rel="stylesheet" property="stylesheet" href="'. Request::getBasePath()
                    .'/modules/system/assets/css/framework.extras.css">'.PHP_EOL;
        // line 6
        echo $this->env->getExtension('CMS')->assetsFunction('js');
        echo $this->env->getExtension('CMS')->displayBlock('scripts');
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/scripts.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  32 => 6,  25 => 5,  22 => 4,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<script src=\"{{ [
    'assets/js/jquery.js',
    'assets/build/bundle-index.js'
]|theme }}\"></script>
{% framework extras %}
{% scripts %}", "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/scripts.htm", "");
    }
}
