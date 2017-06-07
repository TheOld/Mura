<?php

/* /Users/lrodrigues/Projects/murakami/themes/base/partials/site/styles.htm */
class __TwigTemplate_8e282dfd3356b817e77c895b9120a288acc27bdbf97ef26bd6aa02f8ff551fa9 extends Twig_Template
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
        echo "<link rel=\"icon\" type=\"image/png\" href=\"";
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter("assets/images/october.png");
        echo "\" />
";
        // line 2
        echo $this->env->getExtension('CMS')->assetsFunction('css');
        echo $this->env->getExtension('CMS')->displayBlock('styles');
        // line 3
        echo "<link href=\"https://fonts.googleapis.com/css?family=Hind:500|Montserrat:300,400,700,900|Playfair+Display:900i\" rel=\"stylesheet\">
<link href=\"";
        // line 4
        echo $this->env->getExtension('Cms\Twig\Extension')->themeFilter(array(0 => "assets/build/bundle-style.css"));
        // line 6
        echo "\" rel=\"stylesheet\">";
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/styles.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  32 => 6,  30 => 4,  27 => 3,  24 => 2,  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<link rel=\"icon\" type=\"image/png\" href=\"{{ 'assets/images/october.png'|theme }}\" />
{% styles %}
<link href=\"https://fonts.googleapis.com/css?family=Hind:500|Montserrat:300,400,700,900|Playfair+Display:900i\" rel=\"stylesheet\">
<link href=\"{{ [
    'assets/build/bundle-style.css'
]|theme }}\" rel=\"stylesheet\">", "/Users/lrodrigues/Projects/murakami/themes/base/partials/site/styles.htm", "");
    }
}
