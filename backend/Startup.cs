using backend.Middleware;
using backend.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            var allowOrigins = Configuration.GetValue<string>("WebServer:CORS:AllowOrigins");
            if (!string.IsNullOrWhiteSpace(allowOrigins))
                services.AddCors(options => options.AddDefaultPolicy(builder =>
                    builder
                        .WithOrigins(allowOrigins)
                        .AllowAnyMethod()
                        .AllowAnyHeader()));

            services.AddSingleton<IImageService, LocalImageService>();

            var redisAddress = Configuration.GetValue<string>("Cache:Redis:Address");
            if (!string.IsNullOrWhiteSpace(redisAddress))
                services.AddSingleton<ICacheService>(
                    (_) => new RedisCacheService(redisAddress, Configuration.GetValue("Cache:Redis:Database", -1)));
            else
                services.AddSingleton<ICacheService, MemCacheService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            app.UseExceptionHandler(err => err.UseErrorMiddleware());

            app.UseRouting();

            app.UseCors();

            app.UseEndpoints(endpoints => endpoints.MapControllers());

            // Initialize image service to check configuration,
            // to initialize storage and to pre-cache available
            // image metadata.
            var imgService = app.ApplicationServices.GetService<IImageService>();
            imgService.EnsureStorageBuckets();
            imgService.ListAsync().Wait();
        }
    }
}
