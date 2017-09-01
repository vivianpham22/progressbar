using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ProgressBar.Startup))]
namespace ProgressBar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
