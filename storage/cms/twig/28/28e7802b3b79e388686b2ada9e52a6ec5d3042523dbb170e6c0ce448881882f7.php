<?php

/* /Users/lrodrigues/Projects/murakami/themes/base/pages/home.htm */
class __TwigTemplate_b7b62acf4fa7bd619d6a42c5bf164733dd6d14f14133765d3ee91c72593a6d86 extends Twig_Template
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
        echo "<section class=\"section section--0\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"col-xs-12\">
                <h1>Saiba o que podemos fazer</h1>
                <h4>
                    Por você e sua empresa
                </h4>
            </div>
        </div>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "/Users/lrodrigues/Projects/murakami/themes/base/pages/home.htm";
    }

    public function getDebugInfo()
    {
        return array (  19 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<section class=\"section section--0\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"col-xs-12\">
                <h1>Saiba o que podemos fazer</h1>
                <h4>
                    Por você e sua empresa
                </h4>
            </div>
        </div>
    </div>
</section>", "/Users/lrodrigues/Projects/murakami/themes/base/pages/home.htm", "");
    }
}
